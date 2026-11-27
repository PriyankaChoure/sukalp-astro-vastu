import { defineConsultations } from "@/lib/validation/catalog";

// Owners may edit consultation offerings; pages should read them through repositories.
export const consultations = defineConsultations([
  {
    id: "cons_birth_chart_reading",
    slug: "birth-chart-reading",
    sample: true,
    name: "Birth Chart Reading (sample)",
    kind: "ASTROLOGY",
    shortDescription: "A one-to-one discussion of your birth chart and questions.",
    description:
      "A sample astrology consultation focused on discussing a birth chart and the questions you bring to the session.",
    includes: ["One-to-one session", "Session recording", "Written PDF summary"],
    priceInr: 1100,
    gstRatePercent: 18,
    sacCode: "000000",
    durationMinutes: 30,
    mode: "PHONE",
  },
  {
    id: "cons_marriage_and_relationships",
    slug: "marriage-and-relationships",
    sample: true,
    name: "Marriage and Relationships (sample)",
    kind: "ASTROLOGY",
    shortDescription: "A one-to-one astrology session about relationship questions.",
    description:
      "A sample astrology consultation for discussing relationship questions in a structured one-to-one session.",
    includes: ["One-to-one session", "Session recording", "Written PDF summary"],
    priceInr: 1500,
    gstRatePercent: 18,
    sacCode: "000000",
    durationMinutes: 45,
    mode: "PHONE",
  },
  {
    id: "cons_vastu_home_consultation",
    slug: "vastu-home-consultation",
    sample: true,
    name: "Vastu Home Consultation (sample)",
    kind: "VASTU",
    shortDescription: "A one-to-one video session to discuss your home layout.",
    description:
      "A sample Vastu consultation to review your home layout and discuss practical observations in a video session.",
    includes: ["One-to-one session", "Session recording", "Written PDF summary"],
    priceInr: 2100,
    gstRatePercent: 18,
    sacCode: "000000",
    durationMinutes: 60,
    mode: "VIDEO",
  },
  {
    id: "cons_vastu_office_and_shop",
    slug: "vastu-office-and-shop",
    sample: true,
    name: "Vastu Office and Shop (sample)",
    kind: "VASTU",
    shortDescription: "A one-to-one video session to discuss a work space.",
    description:
      "A sample Vastu consultation to review an office or shop layout and discuss practical observations.",
    includes: ["One-to-one session", "Session recording", "Written PDF summary"],
    priceInr: 3100,
    gstRatePercent: 18,
    sacCode: "000000",
    durationMinutes: 60,
    mode: "VIDEO",
  },
]);
