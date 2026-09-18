// =============================================================================
// ZIP LABAN — CONTACT DATA CONFIGURATION
// Strict brand data without invented phone numbers, addresses, or fake hours
// =============================================================================

export const CONTACT_CONFIG = {
  // Configurable contact endpoints (no fabricated phone numbers)
  whatsappNumber: "", // Placeholder until official number confirmed
  whatsappUrl: "https://wa.me/?text=Hi%20Zip%20Laban!%20I'd%20love%20to%20know%20more...",
  instagramHandle: "@ziplaban",
  instagramUrl: "https://www.instagram.com/ziplaban/",
  email: "hello@ziplaban.com",
  businessEmail: "collab@ziplaban.com",
  locations: ["Malappuram", "Kottakkal"],
};

export const CONTACT_METHODS = [
  {
    id: "whatsapp",
    title: "WhatsApp",
    badge: "FAST RESPONSE",
    subtitle: "Fast questions? Message us directly.",
    cta: "Chat Now →",
    type: "whatsapp",
    color: "#8DBA38",
    bgTint: "rgba(141, 186, 56, 0.08)",
    borderTint: "rgba(141, 186, 56, 0.25)",
  },
  {
    id: "instagram",
    title: "Instagram",
    badge: "DAILY DROPS",
    subtitle: "Follow the latest drops, reels and dessert moments.",
    cta: "Follow Us →",
    handle: "@ziplaban",
    type: "instagram",
    color: "#E1306C",
    bgTint: "rgba(225, 48, 108, 0.08)",
    borderTint: "rgba(225, 48, 108, 0.25)",
  },
  {
    id: "email",
    title: "Email",
    badge: "GENERAL DESK",
    subtitle: "For general enquiries, feedback and customer support.",
    cta: "Send Email →",
    address: "hello@ziplaban.com",
    type: "email",
    color: "#175EFF",
    bgTint: "rgba(23, 94, 255, 0.08)",
    borderTint: "rgba(23, 94, 255, 0.25)",
  },
  {
    id: "collab",
    title: "Business & Collaborations",
    badge: "PARTNERSHIPS",
    subtitle: "For partnerships, events, creators and brand opportunities.",
    cta: "Let’s Talk →",
    address: "collab@ziplaban.com",
    type: "collab",
    color: "#073BB8",
    bgTint: "rgba(7, 59, 184, 0.08)",
    borderTint: "rgba(7, 59, 184, 0.25)",
  },
];

export const QUICK_HELP_ITEMS = [
  {
    id: "branch-help",
    tag: "BRANCH SUPPORT",
    title: "Planning a Visit?",
    desc: "Ask our team about branch timings, dessert availability, or your next visit.",
    buttonText: "Branch Support →",
    actionType: "support",
  },
  {
    id: "find-store",
    tag: "FIND A STORE",
    title: "Looking for Malappuram or Kottakkal?",
    desc: "Discover both our official branches in Kerala with interactive map routes and live directions.",
    buttonText: "Locations →",
    path: "/locations",
  },
  {
    id: "menu-questions",
    tag: "MENU QUESTIONS",
    title: "Want to Know What’s Available?",
    desc: "Browse our signature Koshari, Salankatiya, Ruh Hayathi, and the latest seasonal arrivals.",
    buttonText: "View Menu →",
    path: "/menu",
  },
];

export const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "Where are your stores located?",
    answer:
      "Our current official locations are Malappuram and Kottakkal in Kerala. Visit our dedicated Locations page for exact map directions, store photos, and local guidance.",
  },
  {
    id: "faq-2",
    question: "How can I contact a branch?",
    answer:
      "You can chat with our team via WhatsApp, call directly through the branch contact links on the Locations page, or submit the contact form right on this page.",
  },
  {
    id: "faq-3",
    question: "Where can I explore the desserts?",
    answer:
      "Explore our Menu and New Arrivals pages for desserts, flavours and prices. Visit our Locations page to find your nearest branch.",
  },
  {
    id: "faq-4",
    question: "How do I ask about collaborations?",
    answer:
      "We love working with creators, event organizers, and passionate dessert partners. Simply select 'Business Collaboration' in the contact form below or click 'Let’s Talk' in our business contact card.",
  },
  {
    id: "faq-5",
    question: "Where can I see new products?",
    answer:
      "Head over to our New Arrivals page to explore our latest dessert launches, seasonal specials, and limited-edition dessert drops crafted fresh daily.",
  },
];

export const LOCATIONS_TEASER_DATA = [
  {
    id: "malappuram",
    name: "Malappuram",
    badge: "ACTIVE BRANCH",
    image: "/images/store_facade_bg.jpg",
    tagline: "Late-night dessert hub & fresh clotted cream churning counter.",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Zip+Laban+Malappuram+Kerala",
  },
  {
    id: "kottakkal",
    name: "Kottakkal",
    badge: "KOTTAKKAL BRANCH",
    image: "/images/store_facade_2k.jpg",
    tagline: "Kottakkal dessert lounge with signature crunch & cream bowls.",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Zip+Laban+Kottakkal+Kerala",
  },
];

export const SOCIAL_GALLERY_IMAGES = [
  {
    src: "/images/salankatia.jpg",
    title: "Salankatiya (The G.O.A.T)",
    caption: "Slow-churned kashta clotted cream layered with golden crunch.",
  },
  {
    src: "/images/umm_ali.jpg",
    title: "Umm Ali Clotted Magic",
    caption: "Warm flaky pastry soaked in rich whole milk & Antep pistachios.",
  },
  {
    src: "/images/qashtuta.jpg",
    title: "Qashtuta Caramel Dream",
    caption: "Airy sponge cake drenched in milk and crowned with luscious caramel.",
  },
  {
    src: "/images/molten_bomb.jpg",
    title: "Molten Bomb Clotted Cream",
    caption: "Gooey chocolate fountain core smothered in thick clotted cream.",
  },
  {
    src: "/images/viral_reel.jpg",
    title: "Midnight Dessert Sessions",
    caption: "Live churning counters lighting up Malappuram evenings.",
  },
];
