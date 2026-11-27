// Owners may edit the brand, contact details, and SEO defaults here.
export const site = {
  name: "REPLACE_ME Astro & Vastu",
  shortName: "REPLACE_ME",
  tagline: "Thoughtful guidance for your home and life.",
  description: "Astrology and Vastu consultations, guidance, and curated products.",
  locale: "en_IN",
  language: "en",
  currency: "INR",
  timezone: "Asia/Kolkata",
  logo: {
    text: "REPLACE_ME",
    imageSrc: null as string | null,
    alt: "REPLACE_ME Astro & Vastu",
  },
  contact: {
    email: "REPLACE_ME",
    phone: "REPLACE_ME",
    whatsappNumber: "REPLACE_ME",
    whatsappDefaultMessage: "Hello, I would like to know more about your services.",
    hours: "Monday-Saturday, 9:00 AM-6:00 PM IST",
  },
  social: {
    instagram: "",
    facebook: "",
    youtube: "",
  },
  seo: {
    titleTemplate: "%s | REPLACE_ME Astro & Vastu",
    defaultTitle: "REPLACE_ME Astro & Vastu",
    ogImage: "/images/og-default.png",
  },
} as const;
