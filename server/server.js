'use strict';
/*
  GLAM website + Razorpay payment server — zero dependencies (Node 18+).

    node server/server.js

  • Serves the static website from the project folder.
  • POST /api/razorpay/order    creates a Razorpay order from the *catalogue prices* (never trusts browser prices)
  • POST /api/razorpay/verify   verifies the Razorpay payment signature and marks the order paid
  • POST /api/razorpay/webhook  Razorpay -> server confirmation (payment.captured / order.paid / payment.failed)
  • GET  /api/admin/orders      list orders (needs  Authorization: Bearer <ADMIN_TOKEN>)
  The Razorpay SECRET key lives only in server/.env — never in the website files.
*/
const http = require('http'), https = require('https'), fs = require('fs'), path = require('path'), crypto = require('crypto'), vm = require('vm');

/* ---------- env ---------- */
try {
  fs.readFileSync(path.join(__dirname, '.env'), 'utf8').split(/\r?\n/).forEach(line => {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  });
} catch { /* no .env file: rely on real environment variables */ }
const env = k => process.env[k] || '';
const ROOT = path.resolve(__dirname, '..');
const PORT = Number(env('PORT')) || 3000;
const DATA_DIR = path.resolve(env('DATA_DIR') || path.join(__dirname, 'data'));
const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');
const RZP_BASE = (env('RAZORPAY_API_BASE') || 'https://api.razorpay.com').replace(/\/$/, '');

/* ---------- catalogue (re-read when the files change) ---------- */
let siteCache = { stamp: '', value: null };
function loadSite() {
  const files = ['data/site-config.js', 'data/catalog.js'].map(f => path.join(ROOT, f));
  const stamp = files.map(f => fs.statSync(f).mtimeMs).join('|');
  if (siteCache.stamp === stamp) return siteCache.value;
  const sandbox = { window: {} }; vm.createContext(sandbox);
  files.forEach(f => vm.runInContext(fs.readFileSync(f, 'utf8'), sandbox, { filename: f, timeout: 1000 }));
  siteCache = { stamp, value: { config: sandbox.window.SITE_CONFIG || {}, data: sandbox.window.GLAM_DATA || {} } };
  return siteCache.value;
}

/* ---------- order store (JSON file, atomic writes) ---------- */
let orders = null, writeChain = Promise.resolve();
function loadOrders() {
  if (orders) return orders;
  try { orders = JSON.parse(fs.readFileSync(ORDERS_FILE, 'utf8')).orders || []; } catch { orders = []; }
  return orders;
}
function saveOrders() {
  writeChain = writeChain.then(() => new Promise(resolve => {
    try { fs.mkdirSync(DATA_DIR, { recursive: true }); const tmp = ORDERS_FILE + '.tmp'; fs.writeFileSync(tmp, JSON.stringify({ orders }, null, 2)); fs.renameSync(tmp, ORDERS_FILE); }
    catch (err) { console.error('Could not save orders:', err.message); }
    resolve();
  }));
  return writeChain;
}
const soldQty = id => loadOrders().filter(o => o.status === 'paid').reduce((n, o) => n + (o.items.find(i => i.id === id)?.quantity || 0), 0);

/* ---------- helpers ---------- */
class HttpError extends Error { constructor(status, message) { super(message); this.status = status; } }
const json = (res, status, body, extra = {}) => { const text = JSON.stringify(body); res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...extra }); res.end(text); };
const safeEqual = (a, b) => { const x = Buffer.from(String(a)), y = Buffer.from(String(b)); return x.length === y.length && crypto.timingSafeEqual(x, y); };
const hmac = (secret, text) => crypto.createHmac('sha256', secret).update(text).digest('hex');
const readBody = (req, limit = 64 * 1024) => new Promise((resolve, reject) => {
  const chunks = []; let size = 0;
  req.on('data', c => { size += c.length; if (size > limit) { reject(new HttpError(413, 'Request too large.')); req.destroy(); } else chunks.push(c); });
  req.on('end', () => resolve(Buffer.concat(chunks))); req.on('error', reject);
});
const parseJson = buf => { try { return JSON.parse(buf.toString('utf8') || '{}'); } catch { throw new HttpError(400, 'Invalid JSON.'); } };
const clean = (v, max = 200) => String(v ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max);

const hits = new Map();
function rateLimit(req, limit = 30, windowMs = 60_000) {
  const ip = req.socket.remoteAddress || 'x', now = Date.now(), rec = hits.get(ip) || { n: 0, reset: now + windowMs };
  if (now > rec.reset) { rec.n = 0; rec.reset = now + windowMs; }
  rec.n++; hits.set(ip, rec);
  if (rec.n > limit) throw new HttpError(429, 'Too many requests. Please wait a minute and try again.');
}
setInterval(() => { const now = Date.now(); for (const [k, v] of hits) if (now > v.reset) hits.delete(k); }, 60_000).unref();

function rzp(method, endpoint, body) {
  const keyId = env('RAZORPAY_KEY_ID'), secret = env('RAZORPAY_KEY_SECRET');
  if (!keyId || !secret) throw new HttpError(503, 'Online payments are not configured yet.');
  const target = new URL(RZP_BASE + endpoint), lib = target.protocol === 'http:' ? http : https, payload = body ? JSON.stringify(body) : null;
  return new Promise((resolve, reject) => {
    const req = lib.request(target, { method, timeout: 15000, headers: { 'Authorization': 'Basic ' + Buffer.from(`${keyId}:${secret}`).toString('base64'), 'Content-Type': 'application/json', ...(payload ? { 'Content-Length': Buffer.byteLength(payload) } : {}) } }, res => {
      const chunks = []; res.on('data', c => chunks.push(c));
      res.on('end', () => { let parsed = {}; try { parsed = JSON.parse(Buffer.concat(chunks).toString('utf8')); } catch { /* non-JSON */ } resolve({ status: res.statusCode, body: parsed }); });
    });
    req.on('timeout', () => req.destroy(new Error('timeout'))); req.on('error', reject); if (payload) req.write(payload); req.end();
  });
}

/* ---------- order creation ---------- */
function priceCart(items, fulfilment) {
  const { config, data } = loadSite(), shop = config.shop || {}, rule = shop.shipping || {};
  if (!Array.isArray(items) || !items.length || items.length > 30) throw new HttpError(400, 'Your bag is empty.');
  const maxPer = Number(shop.maxQuantityPerItem) || 10, seen = new Set(), lines = [];
  for (const raw of items) {
    const product = (data.products || []).find(p => p.id === String(raw?.id));
    if (!product || seen.has(product.id)) throw new HttpError(400, 'One of the products in your bag is no longer available.');
    seen.add(product.id);
    const quantity = Math.floor(Number(raw.quantity));
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > maxPer) throw new HttpError(400, `Please choose between 1 and ${maxPer} of each product.`);
    const unit = data.sellingPrice(product);
    if (!(unit > 0)) throw new HttpError(400, `${product.name} is not available to buy online. Please contact GLAM.`);
    if (product.stock !== undefined && product.stock !== '') {
      const available = Math.max(0, Number(product.stock) - soldQty(product.id));
      if (quantity > available) throw new HttpError(409, available ? `Only ${available} of ${product.name} left in stock.` : `${product.name} is sold out.`);
    }
    lines.push({ id: product.id, name: product.name, quantity, unit });
  }
  const subtotal = lines.reduce((s, l) => s + l.unit * l.quantity, 0);
  let shipping = 0;
  if (fulfilment === 'delivery' && !(Number(rule.freeAbove) > 0 && subtotal >= Number(rule.freeAbove))) shipping = Math.max(0, Number(rule.flatFee) || 0);
  return { lines, subtotal, shipping, total: subtotal + shipping };
}
function validateCustomer(b) {
  const fulfilment = b.fulfilment === 'pickup' ? 'pickup' : 'delivery';
  if (fulfilment === 'pickup' && loadSite().config.shop?.pickupEnabled === false) throw new HttpError(400, 'Pick-up is not available.');
  const c = b.customer || {}, phone = clean(c.phone, 20).replace(/[\s-]/g, '').replace(/^\+?91/, '');
  const customer = { name: clean(c.name, 80), email: clean(c.email, 120), phone };
  if (!customer.name) throw new HttpError(400, 'Please enter your name.');
  if (!/^[6-9]\d{9}$/.test(phone)) throw new HttpError(400, 'Please enter a valid 10-digit mobile number.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(customer.email)) throw new HttpError(400, 'Please enter a valid email address.');
  let address = null;
  if (fulfilment === 'delivery') {
    const a = b.address || {}; address = { line1: clean(a.line1, 160), line2: clean(a.line2, 160), city: clean(a.city, 60), state: clean(a.state, 60), pincode: clean(a.pincode, 6) };
    if (!address.line1 || !address.city || !address.state) throw new HttpError(400, 'Please complete your delivery address.');
    if (!/^\d{6}$/.test(address.pincode)) throw new HttpError(400, 'Please enter a valid 6-digit PIN code.');
  }
  return { fulfilment, customer, address, notes: clean(b.notes, 200) };
}

async function createOrder(req, res) {
  const body = parseJson(await readBody(req)), info = validateCustomer(body), priced = priceCart(body.items, info.fulfilment);
  const amount = Math.round(priced.total * 100);
  if (amount < 100) throw new HttpError(400, 'The order total is too low to process.');
  const ref = 'GLAM-' + Date.now().toString(36).toUpperCase() + '-' + crypto.randomBytes(2).toString('hex').toUpperCase();
  let r;
  try {
    r = await rzp('POST', '/v1/orders', { amount, currency: loadSite().config.shop?.currency || 'INR', receipt: ref, notes: { ref, fulfilment: info.fulfilment, customer: info.customer.name, phone: info.customer.phone } });
  } catch (err) { if (err instanceof HttpError) throw err; console.error('Razorpay unreachable:', err.message); throw new HttpError(502, 'The payment service is unreachable. Please try again shortly.'); }
  if (r.status !== 200 || !r.body.id) { console.error('Razorpay order error:', r.status, JSON.stringify(r.body)); throw new HttpError(502, 'The payment service could not create your order. Please try again.'); }
  loadOrders().push({ ref, razorpayOrderId: r.body.id, status: 'created', amount, currency: r.body.currency, items: priced.lines, subtotal: priced.subtotal, shipping: priced.shipping, total: priced.total, ...info, createdAt: new Date().toISOString() });
  await saveOrders();
  json(res, 200, { ok: true, ref, orderId: r.body.id, amount, currency: r.body.currency, keyId: env('RAZORPAY_KEY_ID'), totals: { subtotal: priced.subtotal, shipping: priced.shipping, total: priced.total } });
}

function markPaid(order, paymentId) {
  if (order.status === 'paid') return false;
  order.status = 'paid'; order.paymentId = paymentId; order.paidAt = new Date().toISOString();
  console.log(`✔ PAID ${order.ref} ₹${order.total} · ${order.customer.name} · ${order.customer.phone} · ${order.fulfilment}`);
  return true;
}

async function verifyPayment(req, res) {
  const b = parseJson(await readBody(req)), orderId = clean(b.razorpay_order_id, 60), paymentId = clean(b.razorpay_payment_id, 60), signature = clean(b.razorpay_signature, 128);
  if (!orderId || !paymentId || !signature) throw new HttpError(400, 'Missing payment details.');
  const order = loadOrders().find(o => o.razorpayOrderId === orderId);
  if (!order) throw new HttpError(404, 'Order not found.');
  const expected = hmac(env('RAZORPAY_KEY_SECRET'), `${orderId}|${paymentId}`);
  if (!env('RAZORPAY_KEY_SECRET') || !safeEqual(expected, signature)) { order.lastFailure = 'bad signature'; await saveOrders(); throw new HttpError(400, 'Payment verification failed.'); }
  markPaid(order, paymentId); await saveOrders();
  json(res, 200, { ok: true, status: 'paid', ref: order.ref });
}

async function webhook(req, res) {
  const raw = await readBody(req, 512 * 1024), secret = env('RAZORPAY_WEBHOOK_SECRET');
  if (!secret) throw new HttpError(503, 'Webhook secret is not configured.');
  if (!safeEqual(hmac(secret, raw), String(req.headers['x-razorpay-signature'] || ''))) throw new HttpError(400, 'Invalid signature.');
  const event = parseJson(raw), payment = event.payload?.payment?.entity, orderId = payment?.order_id || event.payload?.order?.entity?.id;
  const order = loadOrders().find(o => o.razorpayOrderId === orderId);
  if (order) {
    if (event.event === 'payment.captured' || event.event === 'order.paid') { if (payment?.amount && payment.amount !== order.amount) console.warn('Webhook amount mismatch for', order.ref); else markPaid(order, payment?.id || order.paymentId); }
    else if (event.event === 'payment.failed' && order.status !== 'paid') { order.status = 'failed'; order.lastFailure = payment?.error_description || 'payment failed'; }
    await saveOrders();
  }
  json(res, 200, { ok: true });
}

function adminOrders(req, res) {
  const token = env('ADMIN_TOKEN'), given = (req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  if (!token || !safeEqual(token, given)) throw new HttpError(401, 'Unauthorised.');
  json(res, 200, { ok: true, orders: loadOrders().slice().reverse() });
}

/* ---------- static files ---------- */
const MIME = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8', '.woff2': 'font/woff2' };
function serveStatic(req, res) {
  let pathname; try { pathname = decodeURIComponent(new URL(req.url, 'http://x').pathname); } catch { return json(res, 400, { error: 'Bad request' }); }
  if (pathname.endsWith('/')) pathname += 'index.html';
  const file = path.resolve(ROOT, '.' + pathname), rel = path.relative(ROOT, file), parts = rel.split(path.sep);
  const blocked = rel.startsWith('..') || path.isAbsolute(rel) || parts[0] === 'server' || parts.some(p => p.startsWith('.')) || /\.(md|log)$/i.test(file);
  const send = (f, status) => { const ext = path.extname(f).toLowerCase(); res.writeHead(status, { 'Content-Type': MIME[ext] || 'application/octet-stream', 'Cache-Control': /\.(jpe?g|png|svg|webp|woff2)$/.test(ext) ? 'public, max-age=86400' : 'no-cache', 'X-Content-Type-Options': 'nosniff' }); fs.createReadStream(f).pipe(res); };
  if (!blocked && fs.existsSync(file) && fs.statSync(file).isFile()) return send(file, 200);
  const notFound = path.join(ROOT, '404.html'); return fs.existsSync(notFound) ? send(notFound, 404) : json(res, 404, { error: 'Not found' });
}

/* ---------- server ---------- */
const server = http.createServer(async (req, res) => {
  const origin = env('ALLOWED_ORIGIN');
  if (origin) { res.setHeader('Access-Control-Allow-Origin', origin); res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); res.setHeader('Vary', 'Origin'); }
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  try {
    const { pathname } = new URL(req.url, 'http://x');
    if (req.method === 'OPTIONS') { res.writeHead(204); return res.end(); }
    if (pathname.startsWith('/api/')) {
      if (req.method === 'POST' && pathname !== '/api/razorpay/webhook') rateLimit(req);
      if (req.method === 'POST' && pathname === '/api/razorpay/order') return await createOrder(req, res);
      if (req.method === 'POST' && pathname === '/api/razorpay/verify') return await verifyPayment(req, res);
      if (req.method === 'POST' && pathname === '/api/razorpay/webhook') return await webhook(req, res);
      if (req.method === 'GET' && pathname === '/api/admin/orders') return adminOrders(req, res);
      if (req.method === 'GET' && pathname === '/api/health') return json(res, 200, { ok: true, razorpayConfigured: Boolean(env('RAZORPAY_KEY_ID') && env('RAZORPAY_KEY_SECRET')) });
      return json(res, 404, { ok: false, error: 'Not found' });
    }
    if (req.method !== 'GET' && req.method !== 'HEAD') return json(res, 405, { ok: false, error: 'Method not allowed' });
    serveStatic(req, res);
  } catch (err) {
    if (err instanceof HttpError) return json(res, err.status, { ok: false, error: err.message });
    console.error(err); json(res, 500, { ok: false, error: 'Something went wrong. Please try again.' });
  }
});
if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`GLAM server running at http://localhost:${PORT}`);
    if (!env('RAZORPAY_KEY_ID') || !env('RAZORPAY_KEY_SECRET')) console.warn('⚠  RAZORPAY_KEY_ID / RAZORPAY_KEY_SECRET not set — checkout will show "payments not configured". See server/README.md');
  });
}
module.exports = { server, hmac };
