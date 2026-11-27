// Owners may edit the legal, tax, address, and invoice details here.
export const business = {
  legalName: "REPLACE_ME",
  tradeName: "REPLACE_ME",
  address: {
    line1: "REPLACE_ME",
    line2: "",
    city: "REPLACE_ME",
    state: "REPLACE_ME",
    postalCode: "REPLACE_ME",
    country: "India",
  },
  gst: {
    registered: true,
    gstin: "REPLACE_ME",
    stateCode: "REPLACE_ME",
    defaultRatePercent: 18,
    pricesIncludeGst: true,
  },
  invoice: {
    prefix: "INV",
    numberPadding: 5,
    footerNote: "This is a computer generated invoice.",
  },
} as const;
