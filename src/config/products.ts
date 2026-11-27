import { defineProducts } from "@/lib/validation/catalog";

// Owners may edit product catalog data; pages should read it through repositories.
export const products = defineProducts([
  {
    id: "prod_copper_vastu_pyramid",
    slug: "copper-vastu-pyramid",
    sample: true,
    name: "Copper Vastu Pyramid (sample)",
    shortDescription: "A copper pyramid for a considered home decor collection.",
    description:
      "A decorative copper pyramid offered as a sample catalog item. Its design is intended for display and does not promise specific outcomes.",
    category: "vastu-essentials",
    type: "PHYSICAL",
    priceInr: 899,
    mrpInr: 1199,
    gstRatePercent: 18,
    hsnCode: "000000",
    images: ["/images/placeholder.svg"],
  },
  {
    id: "prod_brass_sri_yantra",
    slug: "brass-sri-yantra",
    sample: true,
    name: "Brass Sri Yantra (sample)",
    shortDescription: "A brass Sri Yantra decorative piece for your home.",
    description:
      "A sample brass decorative piece featuring a Sri Yantra design. It is presented as an ornamental item without outcome guarantees.",
    category: "sacred-symbols",
    type: "PHYSICAL",
    priceInr: 1499,
    gstRatePercent: 18,
    hsnCode: "000000",
    images: ["/images/placeholder.svg"],
  },
  {
    id: "prod_crystal_vastu_tortoise",
    slug: "crystal-vastu-tortoise",
    sample: true,
    name: "Crystal Vastu Tortoise (sample)",
    shortDescription: "A crystal tortoise figurine for decorative display.",
    description:
      "A sample crystal-style tortoise figurine for decorative display. Appearance and material details can be finalized before launch.",
    category: "home-decor",
    type: "PHYSICAL",
    priceInr: 699,
    gstRatePercent: 18,
    hsnCode: "000000",
    images: ["/images/placeholder.svg"],
  },
  {
    id: "prod_vastu_remedy_kit",
    slug: "vastu-remedy-kit",
    sample: true,
    name: "Vastu Remedy Kit (sample)",
    shortDescription: "A sample collection of home arrangement accessories.",
    description:
      "A sample kit concept with accessories for home arrangement. Final contents and usage guidance can be provided in the product listing.",
    category: "remedy-kits",
    type: "PHYSICAL",
    priceInr: 1999,
    mrpInr: 2499,
    gstRatePercent: 18,
    hsnCode: "000000",
    images: ["/images/placeholder.svg"],
  },
]);
