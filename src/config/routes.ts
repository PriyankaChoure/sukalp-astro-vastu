// Owners may edit route paths here so navigation stays consistent.
export const routes = {
  home: "/",
  about: "/about",
  contact: "/contact",
  consultations: "/consultations",
  shop: "/shop",
  blog: "/blog",
  cart: "/cart",
  checkout: "/checkout",
  privacy: "/privacy-policy",
  terms: "/terms-and-conditions",
  refunds: "/refund-and-cancellation",
  shippingPolicy: "/shipping-policy",
  consultation: (slug: string) => `/consultations/${slug}`,
  product: (slug: string) => `/shop/${slug}`,
  blogPost: (slug: string) => `/blog/${slug}`,
} as const;
