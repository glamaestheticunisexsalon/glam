/* Update these clearly marked business placeholders before launch. */
window.SITE_CONFIG = {
  businessName: "Glam Aesthetic unisex salon",
  tagline: "Where Beauty Meets Confidence",
  phone: "9345101346",
  whatsapp: "919345101346",
  email: "glamaestheticunisexsalon@gmail.com",
  address: "1st Floor, 96 Velachery Main Road, Near Jeyachandran Textiles",
  area: "Pallikaranai",
  city: "Chennai",
  state: "Tamil Nadu",
  pincode: "600100",
  country: "India",
  websiteUrl: "[WEBSITE URL]",
  googleMapsUrl: "https://www.google.com/maps/place/Glam+Aesthetic+unisex+salon/@12.9230872,80.1975894,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525db43d575361:0x139ec011f958b950!8m2!3d12.9230872!4d80.1975894!16s%2Fg%2F11zxkbzjp8",
  googleMapsEmbedUrl: "https://www.google.com/maps?q=12.9230872,80.1975894&output=embed",
  latitude: "12.9230872",
  longitude: "80.1975894",
  priceRange: "Contact for pricing",
  openingHours: [
    { days: "Hours", hours: "See Google Maps for current hours" }
  ],
  social: { instagram: "[INSTAGRAM URL]", facebook: "[FACEBOOK URL]", youtube: "[YOUTUBE URL]" },
  googleBusinessProfile: { url: "https://www.google.com/maps/place/Glam+Aesthetic+unisex+salon/@12.9230872,80.1975894,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525db43d575361:0x139ec011f958b950!8m2!3d12.9230872!4d80.1975894!16s%2Fg%2F11zxkbzjp8", placeId: "" },
  booking: { type: "whatsapp", endpoint: "/api/bookings", externalUrl: "", whatsappNumber: "919345101346" },
  checkout: { type: "razorpay", externalUrl: "", email: "glamaestheticunisexsalon@gmail.com" },
  analytics: { googleAnalyticsId: "", googleTagManagerId: "", googleAdsId: "" },
  media: {
    /* Homepage slider (images/Slider) */
    slider: {   /* slideMs = time each slide stays (2000 = 2 seconds) */
      slideMs: 2000,
      logo: "images/Slider/Glam_Reception_Logo.jpeg",
      services: "images/Slider/Glam_Services.jpeg",
      hairColor: "images/optimized/hair-color.jpg",
      board: "images/optimized/main-board-clean.jpg",
      hairExtensions: "images/Slider/soft/hair-extensions.jpg",
      beard: "images/Slider/soft/beard-grooming.jpg",
      carbon: "images/Slider/soft/carbon-laser.jpg",
      led: "images/Slider/soft/led-light-therapy.jpg",
      peel: "images/Slider/soft/chemical-peel.jpg"
    },
    /* Salon photography (images/interiors, images/exterior) */
    reception: "images/optimized/reception.jpg",
    salonDisplay: "images/gallery/Photo1.jpg",
    mirrors: "images/interiors/Photo14.jpg",
    washArea: "images/interiors/Photo3.jpg",
    groomingArea: "images/interiors/Photo13.jpg",
    exteriorNight: "images/exterior/Glam_MainBoard1.jpeg",
    exteriorSign: "images/exterior/Glam_MainBoard2.jpeg",
    /* Service photography (images/services) */
    facial: "images/services/04_Facials_Google_Business.jpg",
    hairExtensions: "images/services/08_Hair_Extensions_Google_Business.jpg",
    haircut: "images/optimized/hair-salon-haircut.jpg"
  },

  /* ---------- Online shop & payments ---------- */
  shop: {
    currency: "INR",
    shipping: { flatFee: 0, freeAbove: 0 },   /* flatFee in rupees; 0 = no shipping charge. freeAbove: free shipping when subtotal reaches this (0 = not used) */
    pickupEnabled: true,                       /* let customers collect from the salon */
    maxQuantityPerItem: 10
  },
  payments: {
    provider: "razorpay",
    keyId: "",                  /* Razorpay PUBLIC key id, e.g. rzp_test_xxxxxxxx (never put the secret here) */
    mode: "server",             /* "server" = create order + verify signature on your server (recommended, see server/README.md)
                                   "client" = static hosting only: Checkout opens with the amount and Razorpay's dashboard is your record */
    apiBase: "",                /* "" = same domain as the website. Otherwise e.g. "https://api.yourdomain.com" */
    brandName: "GLAM Unisex Salon",
    themeColor: "#a95847",
    logo: ""                    /* optional https URL of a square logo shown in the Razorpay popup */
  }
};
