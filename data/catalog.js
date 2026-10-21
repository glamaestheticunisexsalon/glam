/*
  GLAM catalogue — services, products, gallery, FAQs.
  • Images live in /images (services, services/crops, optimized, interiors, exterior, products, Slider).
  • SHOP: the 8 products below are SAMPLE items with SAMPLE prices (INR) and placeholder artwork.
    Replace name, price, discountPrice (selling price, 0 = none), stock, description and image with your real products.
    The Node server (server/server.js) re-reads this file, so Razorpay always charges the price listed here — never a price sent by the browser.
  • price = list price, discountPrice = selling price when lower. stock = units available (0 = sold out).
*/
window.GLAM_DATA = {
  "services": [
    {
      "id": "hair-styling",
      "slug": "hair-styling",
      "name": "Hair Salon & Haircut",
      "category": "Hair",
      "shortDescription": "Fresh cuts, styling and finishing for every day and every occasion — a look that feels like you.",
      "description": "From a fresh haircut to occasion styling, our salon team will help you find a look that feels like you. Tell us what you have in mind and we will talk through shape, finish and at-home care.",
      "image": "images/optimized/hair-salon-haircut.jpg",
      "price": "",
      "discountPrice": "",
      "duration": "Ask our team",
      "benefits": [
        "Personalised consultation",
        "Professional styling",
        "At-home care suggestions"
      ],
      "idealFor": [
        "All hair types and styles"
      ],
      "process": [
        "Discuss your look",
        "Service and styling",
        "Finishing advice"
      ],
      "aftercare": [
        "Use suitable hair care products"
      ],
      "featured": true,
      "bookingEnabled": true,
      "seoTitle": "Hair Salon & Haircut | GLAM Unisex Salon",
      "seoDescription": "Haircuts, styling and finishing at GLAM unisex salon, Pallikaranai, Chennai.",
      "imagePosition": "center 35%",
      "imageAlt": "A stylist working on a guest’s hair at GLAM salon"
    },
    {
      "price": "",
      "discountPrice": "",
      "duration": "Consultation recommended",
      "featured": true,
      "bookingEnabled": true,
      "imagePosition": "center 80%",
      "id": "hair-color",
      "slug": "hair-color",
      "name": "Hair Color",
      "category": "Hair",
      "shortDescription": "Vibrant shades and soft, dimensional colour — planned around your hair and your style.",
      "description": "Explore colour, highlights and tonal shifts with our stylists. A short consultation helps us recommend shades, placement and a care routine that suits your hair type and lifestyle.",
      "image": "images/optimized/hair-color.jpg",
      "imageAlt": "Hair colour service at GLAM: brush-applied caramel highlights on long wavy hair",
      "benefits": [
        "Shade and placement guidance",
        "Colour matched to your style",
        "Aftercare advice to help colour last"
      ],
      "idealFor": [
        "Guests refreshing or changing their colour",
        "Those exploring highlights or tonal shifts"
      ],
      "process": [
        "Consultation and shade discussion",
        "Colour application and processing",
        "Finish, styling and aftercare advice"
      ],
      "aftercare": [
        "Use colour-safe hair care as advised",
        "Ask your stylist about wash frequency",
        "Book maintenance as recommended"
      ],
      "seoTitle": "Hair Color | GLAM Unisex Salon",
      "seoDescription": "Hair colour and highlights at GLAM unisex salon in Pallikaranai, Chennai. Ask our stylists about shades and care."
    },
    {
      "id": "hair-extensions",
      "slug": "hair-extensions",
      "name": "Hair Extensions",
      "category": "Hair",
      "shortDescription": "Length, movement and natural-looking fullness, thoughtfully matched to you.",
      "description": "Discover hair extensions selected and fitted around your style, hair goals and everyday routine. A consultation helps us recommend a suitable approach and care plan.",
      "image": "images/services/08_Hair_Extensions_Google_Business.jpg",
      "price": "",
      "discountPrice": "",
      "duration": "Consultation required",
      "benefits": [
        "Longer, fuller-looking hair",
        "A natural-looking blend",
        "Styling versatility"
      ],
      "idealFor": [
        "Guests seeking added length or volume",
        "A personalised hair consultation"
      ],
      "process": [
        "Consultation and shade match",
        "Method and placement discussion",
        "Fitting, finish and care guidance"
      ],
      "aftercare": [
        "Use salon-recommended care",
        "Brush gently from ends upward",
        "Book maintenance as advised by your stylist"
      ],
      "featured": true,
      "bookingEnabled": true,
      "seoTitle": "Hair Extensions | GLAM Unisex Salon",
      "seoDescription": "Explore personalised hair extension consultations at GLAM. Ask our team about length, fullness, blending and aftercare.",
      "imagePosition": "center 80%",
      "imageAlt": "Hair extensions service at GLAM: long, wavy brunette hair with caramel highlights"
    },
    {
      "price": "",
      "discountPrice": "",
      "duration": "Ask our team",
      "featured": true,
      "bookingEnabled": true,
      "imagePosition": "center 80%",
      "id": "facials",
      "slug": "facials",
      "name": "Facials",
      "category": "Skin & Aesthetics",
      "shortDescription": "Refresh, rejuvenate and glow with a calming facial chosen for your skin.",
      "description": "A relaxing professional facial in a calm setting. Share your skin goals and sensitivities and our team will suggest a suitable facial and aftercare. Individual results vary.",
      "image": "images/services/04_Facials_Google_Business.jpg",
      "imageAlt": "A guest enjoying a relaxing facial at GLAM",
      "benefits": [
        "A calming, restorative session",
        "Personalised to your skin",
        "Simple home-care guidance"
      ],
      "idealFor": [
        "Guests wanting a skin-care reset",
        "Special occasions or regular self-care"
      ],
      "process": [
        "Skin discussion",
        "Cleanse, treat and massage",
        "Finish and aftercare advice"
      ],
      "aftercare": [
        "Follow the aftercare shared by your therapist",
        "Use sun protection as advised",
        "Mention any skin sensitivities when booking"
      ],
      "seoTitle": "Facials | GLAM Unisex Salon, Chennai",
      "seoDescription": "Professional facials at GLAM unisex salon in Pallikaranai, Chennai. Share your skin goals and book a visit."
    },
    {
      "id": "cellular-led",
      "slug": "cellular-led-light-therapy",
      "name": "Cellular LED Light Therapy",
      "category": "Skin & Aesthetics",
      "shortDescription": "A considered light-based skin session, tailored in consultation with our team.",
      "description": "LED light therapy uses specific wavelengths of light in a professional setting. Suitability, session timing and expected outcomes vary; consult a qualified professional before treatment.",
      "image": "images/services/crops/cellular-led-light-therapy.jpg",
      "price": "",
      "discountPrice": "",
      "duration": "Consultation required",
      "benefits": [
        "A calm, non-invasive session",
        "Personalised treatment planning",
        "Professional skin-care guidance"
      ],
      "idealFor": [
        "Guests exploring aesthetic skin care",
        "Those seeking a professional consultation"
      ],
      "process": [
        "Skin consultation",
        "Eye protection and comfortable positioning",
        "Planned session and aftercare advice"
      ],
      "aftercare": [
        "Follow your professional's advice",
        "Use sun protection as recommended",
        "Discuss any skin concerns with a qualified professional"
      ],
      "featured": true,
      "bookingEnabled": true,
      "seoTitle": "LED Light Therapy | GLAM",
      "seoDescription": "Learn about professional LED light therapy consultations and skin-care planning at GLAM.",
      "imagePosition": "center",
      "imageAlt": "Cellular LED light therapy session at GLAM"
    },
    {
      "id": "carbon-laser",
      "slug": "carbon-laser-treatment",
      "name": "Carbon Laser",
      "category": "Skin & Aesthetics",
      "shortDescription": "A professional carbon laser consultation for a refreshed, brighter-looking appearance.",
      "description": "Carbon laser is an aesthetic treatment performed with specialist equipment. A consultation is essential to review your skin, suitability, preparation and aftercare. Results and experience vary by individual.",
      "image": "images/services/crops/carbon-laser.jpg",
      "price": "",
      "discountPrice": "",
      "duration": "Consultation required",
      "benefits": [
        "Individual treatment planning",
        "Professional skin assessment",
        "Clear preparation and aftercare guidance"
      ],
      "idealFor": [
        "Guests interested in aesthetic skin treatments",
        "People seeking a professional skin consultation"
      ],
      "process": [
        "Consultation and suitability review",
        "Treatment planning",
        "Professional treatment and aftercare guidance"
      ],
      "aftercare": [
        "Follow the clinician or qualified professional's instructions",
        "Use recommended sun protection",
        "Contact your provider if you have concerns"
      ],
      "featured": true,
      "bookingEnabled": true,
      "seoTitle": "Carbon Laser Treatment | GLAM",
      "seoDescription": "Explore a carbon laser consultation at GLAM. Suitability and treatment plans are discussed with a qualified professional.",
      "imagePosition": "center",
      "imageAlt": "Carbon laser treatment at GLAM"
    },
    {
      "id": "chemical-peel",
      "slug": "chemical-peel",
      "name": "Chemical Peel",
      "category": "Skin & Aesthetics",
      "shortDescription": "A professional peel consultation focused on your skin and its individual needs.",
      "description": "Chemical peels use carefully selected formulations in a professional setting. A qualified professional will discuss suitability, preparation, possible reactions and aftercare before recommending a plan.",
      "image": "images/services/crops/chemical-peel.jpg",
      "price": "",
      "discountPrice": "",
      "duration": "Consultation required",
      "benefits": [
        "Personalised formulation discussion",
        "Professional skin assessment",
        "Clear aftercare planning"
      ],
      "idealFor": [
        "Guests considering a professional peel",
        "Those seeking a tailored skin-care plan"
      ],
      "process": [
        "Skin history and consultation",
        "Preparation and suitability review",
        "Treatment and aftercare instructions"
      ],
      "aftercare": [
        "Follow all aftercare instructions",
        "Avoid unapproved active products while healing",
        "Seek professional advice if irritation concerns you"
      ],
      "featured": true,
      "bookingEnabled": true,
      "seoTitle": "Chemical Peel Consultation | GLAM",
      "seoDescription": "Understand chemical peel consultations, suitability and aftercare at GLAM. Speak with a qualified professional.",
      "imagePosition": "center",
      "imageAlt": "Chemical peel treatment at GLAM"
    },
    {
      "id": "skin-rejuvenation",
      "slug": "advanced-aesthetic-skin-rejuvenation",
      "name": "Advanced Aesthetic Skin Rejuvenation",
      "category": "Skin & Aesthetics",
      "shortDescription": "An expert-led conversation about skin goals, options and a considered care plan.",
      "description": "Our aesthetic skin-care consultations begin with listening to your goals and reviewing suitable options. Treatments are not medical advice; consult a qualified professional regarding individual concerns.",
      "image": "images/services/crops/skin-rejuvenation.jpg",
      "price": "",
      "discountPrice": "",
      "duration": "Consultation required",
      "benefits": [
        "Goal-led consultation",
        "Options explained clearly",
        "Individualised care discussion"
      ],
      "idealFor": [
        "Guests exploring aesthetic skin care",
        "People seeking guidance on treatment options"
      ],
      "process": [
        "Discuss goals and skin history",
        "Review options and suitability",
        "Agree next steps and aftercare"
      ],
      "aftercare": [
        "Follow the advice given for your treatment",
        "Ask your professional before changing your routine"
      ],
      "featured": true,
      "bookingEnabled": true,
      "seoTitle": "Aesthetic Skin Rejuvenation | GLAM",
      "seoDescription": "Explore advanced aesthetic skin-care consultations at GLAM. Treatment options depend on individual suitability.",
      "imagePosition": "center",
      "imageAlt": "Advanced aesthetic skin rejuvenation at GLAM"
    },
    {
      "id": "microblading",
      "slug": "microblading",
      "name": "Microblading",
      "category": "Beauty",
      "shortDescription": "Thoughtfully shaped brows with a natural-looking finish, planned around your features.",
      "description": "Microblading is a semi-permanent brow service. A consultation covers desired shape, suitability, pigment choices, healing and aftercare before any appointment is confirmed.",
      "image": "images/services/crops/microblading.jpg",
      "price": "",
      "discountPrice": "",
      "duration": "Consultation required",
      "benefits": [
        "Personalised brow design",
        "Natural-looking definition",
        "Clear healing and aftercare guidance"
      ],
      "idealFor": [
        "Guests exploring brow definition",
        "Those ready for a shape consultation"
      ],
      "process": [
        "Brow mapping and consultation",
        "Shape approval and service planning",
        "Treatment and aftercare review"
      ],
      "aftercare": [
        "Keep to the aftercare plan provided",
        "Avoid touching or picking the area",
        "Attend follow-up only as advised"
      ],
      "featured": true,
      "bookingEnabled": true,
      "seoTitle": "Microblading | GLAM",
      "seoDescription": "Discover microblading consultations at GLAM, including brow design, suitability and aftercare.",
      "imagePosition": "center",
      "imageAlt": "Microblading perfect brows at GLAM"
    },
    {
      "price": "",
      "discountPrice": "",
      "duration": "Ask our team",
      "featured": true,
      "bookingEnabled": true,
      "imagePosition": "center 80%",
      "id": "waxing",
      "slug": "waxing",
      "name": "Waxing",
      "category": "Beauty",
      "shortDescription": "Smooth skin and lasting confidence, with careful, hygienic waxing.",
      "description": "Professional waxing in a clean, private setting. Tell us about your skin and any sensitivities when booking so we can recommend the right approach.",
      "image": "images/services/05_Waxing_Google_Business.jpg",
      "imageAlt": "Professional waxing service at GLAM",
      "benefits": [
        "Smooth finish",
        "Hygienic, careful service",
        "Guidance for after-wax care"
      ],
      "idealFor": [
        "Guests seeking smooth skin",
        "Regular grooming routines"
      ],
      "process": [
        "Brief consultation",
        "Skin preparation and waxing",
        "Soothing finish and aftercare tips"
      ],
      "aftercare": [
        "Avoid heat and friction right after waxing",
        "Moisturise as advised",
        "Tell us about skin sensitivities in advance"
      ],
      "seoTitle": "Waxing | GLAM Unisex Salon",
      "seoDescription": "Waxing services at GLAM unisex salon in Pallikaranai, Chennai."
    },
    {
      "price": "",
      "discountPrice": "",
      "duration": "Ask our team",
      "featured": true,
      "bookingEnabled": true,
      "imagePosition": "center 80%",
      "id": "manicure-pedicure",
      "slug": "manicure-pedicure",
      "name": "Manicure & Pedicure",
      "category": "Beauty",
      "shortDescription": "Healthy nails and beautiful hands and feet, finished with care.",
      "description": "Relaxing hand and foot care that leaves nails neat and polished. Ask our team about the options available.",
      "image": "images/services/06_Manicure_Pedicure_Google_Business.jpg",
      "imageAlt": "Manicure and pedicure service at GLAM",
      "benefits": [
        "Neat, polished nails",
        "A relaxing pampering session",
        "Hand and foot care"
      ],
      "idealFor": [
        "Regular nail care",
        "Getting ready for an occasion"
      ],
      "process": [
        "Nail discussion",
        "Shape, care and polish",
        "Finishing and care tips"
      ],
      "aftercare": [
        "Moisturise hands and feet regularly",
        "Avoid harsh chemicals right after your visit"
      ],
      "seoTitle": "Manicure & Pedicure | GLAM Unisex Salon",
      "seoDescription": "Manicure and pedicure at GLAM unisex salon in Pallikaranai, Chennai."
    },
    {
      "price": "",
      "discountPrice": "",
      "duration": "Ask our team",
      "featured": true,
      "bookingEnabled": true,
      "imagePosition": "center 80%",
      "id": "beard-grooming",
      "slug": "beard-grooming",
      "name": "Beard Grooming",
      "category": "Grooming",
      "shortDescription": "A sharp look and a bold you — shaping, trimming and finishing.",
      "description": "Precise beard shaping and grooming tailored to your face and style, in a relaxed, professional setting.",
      "image": "images/services/07_Beard_Grooming_Google_Business.jpg",
      "imageAlt": "Beard grooming service at GLAM",
      "benefits": [
        "Clean, defined shape",
        "Tailored to your face and style",
        "Finishing and care advice"
      ],
      "idealFor": [
        "Regular beard maintenance",
        "A fresh look for an occasion"
      ],
      "process": [
        "Discuss your preferred style",
        "Trim, shape and detail",
        "Finish and care advice"
      ],
      "aftercare": [
        "Use beard-care products as advised",
        "Book regular trims to keep the shape"
      ],
      "seoTitle": "Beard Grooming | GLAM Unisex Salon",
      "seoDescription": "Beard grooming and shaping at GLAM unisex salon in Pallikaranai, Chennai."
    },
    {
      "id": "grooming",
      "slug": "unisex-grooming",
      "name": "Unisex Grooming",
      "category": "Grooming",
      "shortDescription": "Polished grooming services in a welcoming salon setting.",
      "description": "Our unisex salon offers grooming and beauty services in a relaxed, professional setting. Ask our team about availability and service options.",
      "image": "images/interiors/Photo13.jpg",
      "price": "",
      "discountPrice": "",
      "duration": "Ask our team",
      "benefits": [
        "Welcoming unisex salon",
        "Personalised service",
        "Professional finish"
      ],
      "idealFor": [
        "Guests looking for grooming services"
      ],
      "process": [
        "Consultation",
        "Service",
        "Finishing advice"
      ],
      "aftercare": [
        "Follow stylist recommendations"
      ],
      "featured": false,
      "bookingEnabled": true,
      "seoTitle": "Unisex Grooming | GLAM",
      "seoDescription": "Visit GLAM for unisex grooming and salon services. Contact us to discuss your needs.",
      "imagePosition": "center",
      "imageAlt": "The grooming area inside GLAM unisex salon"
    }
  ],
  "products": [
    {
      "id": "argan-hair-serum",
      "slug": "argan-hair-serum",
      "name": "Argan Hair Serum",
      "brand": "GLAM selection",
      "category": "Hair Care",
      "image": "images/products/argan-hair-serum.svg",
      "imageAlt": "Argan Hair Serum (placeholder artwork)",
      "gallery": [],
      "description": "A lightweight finishing serum to smooth and add shine to everyday hair. Ask our stylists which products suit your hair type.",
      "price": 699,
      "discountPrice": 599,
      "stock": 25,
      "sku": "GLAM-ARGANHAIRS",
      "ingredients": [],
      "usage": "Apply a small amount to damp or dry hair, focusing on the lengths and ends. Refer to the product packaging for full directions.",
      "featured": true
    },
    {
      "id": "repair-shampoo",
      "slug": "repair-shampoo",
      "name": "Repair Shampoo",
      "brand": "GLAM selection",
      "category": "Hair Care",
      "image": "images/products/repair-shampoo.svg",
      "imageAlt": "Repair Shampoo (placeholder artwork)",
      "gallery": [],
      "description": "A gentle daily shampoo recommended for colour-treated and styled hair. Check the label for full details.",
      "price": 549,
      "discountPrice": 0,
      "stock": 40,
      "sku": "GLAM-REPAIRSHAM",
      "ingredients": [],
      "usage": "Massage into wet hair and scalp, then rinse thoroughly. Follow the directions on the packaging.",
      "featured": true
    },
    {
      "id": "nourishing-hair-mask",
      "slug": "nourishing-hair-mask",
      "name": "Nourishing Hair Mask",
      "brand": "GLAM selection",
      "category": "Hair Care",
      "image": "images/products/nourishing-hair-mask.svg",
      "imageAlt": "Nourishing Hair Mask (placeholder artwork)",
      "gallery": [],
      "description": "A conditioning mask for a soft, smooth finish after salon services. Refer to the label for ingredients and usage.",
      "price": 799,
      "discountPrice": 0,
      "stock": 30,
      "sku": "GLAM-NOURISHING",
      "ingredients": [],
      "usage": "Apply to clean, damp hair, leave for the time stated on the packaging, then rinse.",
      "featured": true
    },
    {
      "id": "extension-care-kit",
      "slug": "extension-care-kit",
      "name": "Extension Care Kit",
      "brand": "GLAM selection",
      "category": "Hair Care",
      "image": "images/products/extension-care-kit.svg",
      "imageAlt": "Extension Care Kit (placeholder artwork)",
      "gallery": [],
      "description": "A care set to help you look after hair extensions between salon visits. Ask our team about the care routine for your extensions.",
      "price": 1199,
      "discountPrice": 999,
      "stock": 15,
      "sku": "GLAM-EXTENSIONC",
      "ingredients": [],
      "usage": "Use as advised by your stylist and the instructions in the kit.",
      "featured": true
    },
    {
      "id": "vitamin-c-serum",
      "slug": "vitamin-c-serum",
      "name": "Vitamin C Face Serum",
      "brand": "GLAM selection",
      "category": "Skin Care",
      "image": "images/products/vitamin-c-serum.svg",
      "imageAlt": "Vitamin C Face Serum (placeholder artwork)",
      "gallery": [],
      "description": "A daily face serum for a fresh-looking complexion. Patch test first and refer to the label for ingredients.",
      "price": 999,
      "discountPrice": 0,
      "stock": 20,
      "sku": "GLAM-VITAMINCSE",
      "ingredients": [],
      "usage": "Apply a few drops to clean skin before moisturiser. Follow the directions on the packaging.",
      "featured": true
    },
    {
      "id": "gentle-cleanser",
      "slug": "gentle-cleanser",
      "name": "Gentle Cleanser",
      "brand": "GLAM selection",
      "category": "Skin Care",
      "image": "images/products/gentle-cleanser.svg",
      "imageAlt": "Gentle Cleanser (placeholder artwork)",
      "gallery": [],
      "description": "A mild daily face cleanser designed for a comfortable, clean feel. Refer to the label for details.",
      "price": 449,
      "discountPrice": 0,
      "stock": 50,
      "sku": "GLAM-GENTLECLEA",
      "ingredients": [],
      "usage": "Massage onto damp skin and rinse well. Follow the directions on the packaging.",
      "featured": true
    },
    {
      "id": "daily-sunscreen",
      "slug": "daily-sunscreen",
      "name": "Daily Sunscreen SPF 50",
      "brand": "GLAM selection",
      "category": "Skin Care",
      "image": "images/products/daily-sunscreen.svg",
      "imageAlt": "Daily Sunscreen SPF 50 (placeholder artwork)",
      "gallery": [],
      "description": "A daily sunscreen for everyday protection after treatments and in the Chennai sun. Reapply as directed on the pack.",
      "price": 599,
      "discountPrice": 549,
      "stock": 35,
      "sku": "GLAM-DAILYSUNSC",
      "ingredients": [],
      "usage": "Apply generously to exposed skin before sun exposure and reapply as directed on the packaging.",
      "featured": true
    },
    {
      "id": "beard-oil",
      "slug": "beard-oil",
      "name": "Beard Oil",
      "brand": "GLAM selection",
      "category": "Grooming",
      "image": "images/products/beard-oil.svg",
      "imageAlt": "Beard Oil (placeholder artwork)",
      "gallery": [],
      "description": "A conditioning oil to keep your beard soft and neat between grooming visits.",
      "price": 499,
      "discountPrice": 0,
      "stock": 25,
      "sku": "GLAM-BEARDOIL",
      "ingredients": [],
      "usage": "Warm a few drops in your palms and work through the beard. Follow the directions on the packaging.",
      "featured": true
    }
  ],
  "offers": [],
  "team": [],
  "gallery": [
    {
      "id": "reception",
      "category": "Interior",
      "image": "images/optimized/reception.jpg",
      "alt": "The GLAM reception with a white desk, tan armchairs and a gold Glam wall logo",
      "caption": "Reception",
      "width": 1500,
      "height": 1000,
      "home": true
    },
    {
      "id": "exterior-night",
      "category": "Exterior",
      "image": "images/exterior/Glam_MainBoard1.jpeg",
      "alt": "The illuminated GLAM Unisex Salon signboard at night",
      "caption": "Our signboard",
      "width": 960,
      "height": 1280,
      "home": true
    },
    {
      "id": "salon-display",
      "category": "Interior",
      "image": "images/gallery/Photo1.jpg",
      "alt": "A product display and styling area inside GLAM salon",
      "caption": "Inside the salon",
      "width": 1280,
      "height": 960,
      "home": true
    },
    {
      "id": "hair-color",
      "category": "Hair",
      "image": "images/optimized/hair-color.jpg",
      "alt": "Hair colour service: highlights being applied to long wavy hair",
      "caption": "Hair colour",
      "width": 1254,
      "height": 1254,
      "home": true
    },
    {
      "id": "facials",
      "category": "Skin",
      "image": "images/services/04_Facials_Google_Business.jpg",
      "alt": "A guest enjoying a facial at GLAM",
      "caption": "Facials",
      "width": 1200,
      "height": 1200,
      "home": true
    },
    {
      "id": "exterior-sign",
      "category": "Exterior",
      "image": "images/exterior/Glam_MainBoard2.jpeg",
      "alt": "The GLAM Unisex Salon sign lit above the entrance",
      "caption": "Find us on Velachery Main Road",
      "width": 1280,
      "height": 580,
      "home": false
    },
    {
      "id": "mirror-station",
      "category": "Interior",
      "image": "images/interiors/Photo14.jpg",
      "alt": "Styling mirrors and chairs inside GLAM salon",
      "caption": "Styling stations",
      "width": 1280,
      "height": 960,
      "home": false
    },
    {
      "id": "wash-area",
      "category": "Interior",
      "image": "images/interiors/Photo3.jpg",
      "alt": "The shampoo and wash area at GLAM salon",
      "caption": "Wash area",
      "width": 1280,
      "height": 960,
      "home": false
    },
    {
      "id": "grooming-area",
      "category": "Interior",
      "image": "images/interiors/Photo13.jpg",
      "alt": "The grooming area at GLAM with a decorative partition",
      "caption": "Grooming area",
      "width": 1280,
      "height": 960,
      "home": false
    },
    {
      "id": "haircut",
      "category": "Hair",
      "image": "images/optimized/hair-salon-haircut.jpg",
      "alt": "Hair salon and haircut service at GLAM",
      "caption": "Hair salon & haircut",
      "width": 1400,
      "height": 933,
      "home": false
    },
    {
      "id": "hair-extensions",
      "category": "Hair",
      "image": "images/services/08_Hair_Extensions_Google_Business.jpg",
      "alt": "Hair extensions: long wavy hair with caramel highlights",
      "caption": "Hair extensions",
      "width": 1200,
      "height": 1200,
      "home": false
    },
    {
      "id": "beard",
      "category": "Services",
      "image": "images/services/07_Beard_Grooming_Google_Business.jpg",
      "alt": "A guest receiving a beard grooming service",
      "caption": "Beard grooming",
      "width": 1200,
      "height": 1200,
      "home": false
    },
    {
      "id": "waxing",
      "category": "Services",
      "image": "images/services/05_Waxing_Google_Business.jpg",
      "alt": "A professional waxing service",
      "caption": "Waxing",
      "width": 1200,
      "height": 1200,
      "home": false
    },
    {
      "id": "mani-pedi",
      "category": "Services",
      "image": "images/services/06_Manicure_Pedicure_Google_Business.jpg",
      "alt": "A manicure and pedicure service",
      "caption": "Manicure & pedicure",
      "width": 1200,
      "height": 1200,
      "home": false
    },
    {
      "id": "services-board",
      "category": "Brand",
      "image": "images/Slider/Glam_Services.jpeg",
      "alt": "GLAM advanced aesthetic skin care services board",
      "caption": "Advanced aesthetic skin care",
      "width": 1600,
      "height": 902,
      "home": false
    },
    {
      "id": "brand-board",
      "category": "Brand",
      "image": "images/optimized/main-board-clean.jpg",
      "alt": "GLAM Unisex Salon brand board",
      "caption": "GLAM Unisex Salon",
      "width": 1079,
      "height": 538,
      "home": false
    }
  ],
  "beforeAfter": [],
  "testimonials": [
    {
      "id": "testimonial-placeholder",
      "name": "Guest feedback",
      "quote": "Customer testimonial will be added here once a verified review is supplied.",
      "source": "Placeholder — not a customer review"
    }
  ],
  "faqs": [
    {
      "question": "What is carbon laser treatment?",
      "answer": "Carbon laser is an aesthetic treatment using specialist laser equipment. A qualified professional should assess suitability, explain the process and discuss potential risks and aftercare. Individual experiences vary."
    },
    {
      "question": "What is a chemical peel treatment?",
      "answer": "A chemical peel uses a selected formulation applied by a professional. Type, strength and suitability depend on your skin and goals. Consult a qualified professional and follow their preparation and aftercare advice."
    },
    {
      "question": "What is LED light therapy?",
      "answer": "LED light therapy uses selected wavelengths of light in a professional or at-home device. Ask a qualified professional whether it is appropriate for you and how often sessions may be considered."
    },
    {
      "question": "What is microblading?",
      "answer": "Microblading is a semi-permanent brow service involving pigment and fine strokes. A consultation should cover suitability, shape, healing expectations and aftercare."
    },
    {
      "question": "What are hair extensions?",
      "answer": "Hair extensions add length, volume or both using a method selected for the guest's hair and goals. A consultation helps determine an appropriate method, maintenance plan and home care."
    },
    {
      "question": "How should I prepare for a salon treatment?",
      "answer": "Preparation varies by service. When booking, tell the salon about relevant sensitivities and ask what to avoid or bring. Follow the specific instructions provided by your qualified professional."
    },
    {
      "question": "How should I care for hair extensions?",
      "answer": "Follow your stylist's product and brushing guidance, detangle gently from the ends upward and keep up with recommended maintenance appointments."
    },
    {
      "question": "How often should aesthetic treatments be performed?",
      "answer": "There is no single schedule for everyone. Frequency depends on the treatment, personal circumstances and professional assessment. Consult a qualified professional before planning repeat treatments."
    }
  ]
};

/* Price helpers (shared by the shop pages and the payment server). */
window.GLAM_DATA.sellingPrice = p => (Number(p.discountPrice) > 0 && Number(p.discountPrice) < Number(p.price)) ? Number(p.discountPrice) : Number(p.price) || 0;
window.GLAM_DATA.hasPrice = p => window.GLAM_DATA.sellingPrice(p) > 0;
