// Owners may edit shipping prices, delivery estimates, and digital limits here.
export const shipping = {
  country: "IN",
  flatRateInr: 80,
  freeShippingAboveInr: 1500,
  codAvailable: false,
  estimatedDeliveryDays: { min: 4, max: 8 },
  gstRatePercent: 18,
  digitalDelivery: {
    linkExpiryDays: 7,
    maxDownloadsPerLink: 5,
  },
} as const;
