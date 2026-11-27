// Next.js only inlines NEXT_PUBLIC_* when they are referenced literally,
// so every variable is written out here rather than read dynamically.
export const clientEnv = {
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/+$/, ""),
  razorpayKeyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ?? "",
  turnstileSiteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "",
  sanityProjectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  sanityDataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
} as const;
