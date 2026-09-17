import { ORDERING_ENABLED } from '../config/ordering';
/**
 * Centralized data configuration for ZIP LABAN Global Footer
 */

export const FOOTER_BRAND = {
  tagline: "Creamy. Crunchy. Dreamy.\nHappiness in every bite.",
  subtext: "Born from Cairo’s legendary sweet craft and served fresh daily in Kerala with pure milk, clotted kashta, and golden crunch.",
  handwritten: "See you for the next\nscoop of happiness ♡",
};

export const SOCIAL_LINKS = [
  {
    name: "Instagram",
    handle: "@zip_laban",
    url: "https://www.instagram.com/zip_laban/",
    ariaLabel: "Follow Zip Laban on Instagram",
  },
  {
    name: "WhatsApp",
    handle: "+91 98460 77889",
    url: "https://wa.me/919846077889",
    ariaLabel: "Chat with Zip Laban on WhatsApp",
  },
];

export const FOOTER_SECTIONS = {
  explore: {
    title: "Explore",
    links: [
      { label: "Home", path: "/" },
      { label: "Menu", path: "/menu" },
      { label: "New Arrivals", path: "/new-arrivals", badge: "DROP" },
      { label: "About", path: "/about" },
    ],
  },
  order: {
    title: "Order",
    links: [
      { label: ORDERING_ENABLED ? "Order Online" : "Browse Menu", path: "/menu" },
      { label: "New Drops", path: "/new-arrivals" },
      { label: ORDERING_ENABLED ? "View Happiness Bag" : "Find a Store", path: ORDERING_ENABLED ? "/cart" : "/locations" },
      { label: "Franchise Inquiries", action: "franchise", isAction: true },
    ],
  },
  locations: {
    title: "Locations",
    links: [
      { label: "Malappuram Branch", path: "/locations", subtext: "Fresh Kashta Churn Counter" },
      { label: "Kottakkal (Flagship)", path: "/locations", subtext: "Palathara Bypass Lounge" },
      { label: "View All Locations →", path: "/locations", highlight: true },
    ],
  },
  help: {
    title: "Help & Info",
    links: [
      { label: "Contact Us", path: "/contact" },
      { label: "FAQ", path: "/contact", hash: "#faq" },
      { label: "Privacy Policy", modal: "privacy", isModal: true },
      { label: "Terms of Service", modal: "terms", isModal: true },
      { label: "Refund / Delivery Policy", modal: "refund", isModal: true },
    ],
  },
};

export const LEGAL_POLICIES = {
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "January 2026",
    content: [
      "At ZIP LABAN, we value and respect your privacy. This policy details how we handle personal data when you interact with our website, browse our dessert menu, or place orders.",
      "Information We Collect: When you place an order, message us via WhatsApp, or reach out through our contact forms, we collect your name, phone number, and delivery preferences solely for fulfilling orders and customer assistance.",
      "Data Usage: We never sell or share your personal contact details with third-party advertising networks. Your details are used strictly to provide you with authentic dessert experiences and updates if you opt in.",
      "Contact: For any privacy inquiries, reach us at hello@ziplaban.com or visit our Malappuram and Kottakkal branches.",
    ],
  },
  terms: {
    title: "Terms of Service",
    lastUpdated: "January 2026",
    content: [
      "Welcome to ZIP LABAN. By using our website and ordering our handcrafted desserts, you agree to the following terms and guidelines.",
      "Dessert Freshness & Availability: All signature items (Salankatiya, Koshari Royale, Ruh Hayathi) are churned fresh in limited daily batches. In the event an item sells out, our team will promptly offer an alternative or refund.",
      "Intellectual Property: The ZIP LABAN name, logos, mascot illustration, and brand packaging are exclusive trademarks of ZIP LABAN. Unauthorised reproduction or distribution is prohibited.",
      "Governing Jurisdiction: These terms are governed under applicable local laws in Kerala, India.",
    ],
  },
  refund: {
    title: "Refund & Delivery Policy",
    lastUpdated: "January 2026",
    content: [
      "Our Happiness Guarantee: Because our desserts contain fresh dairy, kashta, and crisp toppings, we take utmost care during preparation and packaging.",
      "Damaged or Incorrect Items: In the unlikely event that your dessert arrives compromised, incorrect, or spoiled, please contact our team via WhatsApp (+91 98460 77889) within 2 hours of delivery with a photo. We will gladly prepare a fresh replacement or issue an immediate refund.",
      "Cancellations: Orders may be cancelled prior to kitchen preparation. Once our chefs begin churning and dressing your bowl, orders cannot be cancelled.",
    ],
  },
};
