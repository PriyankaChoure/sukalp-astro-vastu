// Owners may edit message templates and email subjects used for customer updates.
export const messagingChannels = {
  primary: "whatsapp",
  fallback: "email",
} as const;

export interface WhatsAppTemplate {
  name: string;
  language: string;
  category: "UTILITY";
  phase: 1 | 2;
  variables: readonly string[];
  bodyDraft: string;
}

export const whatsappTemplates = {
  bookingPaymentConfirmed: {
    name: "booking_payment_confirmed",
    language: "en",
    category: "UTILITY",
    phase: 1,
    variables: ["customerName", "consultationName", "bookingRef"],
    bodyDraft:
      "Hello {{1}}, your payment for {{2}} is confirmed. Your booking reference is {{3}}. Thank you for choosing us.",
  },
  bookingScheduled: {
    name: "booking_scheduled",
    language: "en",
    category: "UTILITY",
    phase: 1,
    variables: ["customerName", "consultationName", "dateTime", "joiningDetails"],
    bodyDraft:
      "Hello {{1}}, your {{2}} is scheduled for {{3}}. Session details: {{4}}. Please keep this information handy.",
  },
  consultationFilesReady: {
    name: "consultation_files_ready",
    language: "en",
    category: "UTILITY",
    phase: 1,
    variables: ["customerName", "consultationName", "downloadUrl", "expiryDays"],
    bodyDraft:
      "Hello {{1}}, the files for {{2}} are ready. Download them here: {{3}}. The link expires in {{4}} days.",
  },
  orderConfirmed: {
    name: "order_confirmed",
    language: "en",
    category: "UTILITY",
    phase: 1,
    variables: ["customerName", "orderRef", "amount"],
    bodyDraft:
      "Hello {{1}}, your order {{2}} is confirmed for {{3}}. We will share shipping updates when available.",
  },
  orderShipped: {
    name: "order_shipped",
    language: "en",
    category: "UTILITY",
    phase: 1,
    variables: ["customerName", "orderRef", "courierName", "trackingNumber"],
    bodyDraft:
      "Hello {{1}}, order {{2}} has shipped with {{3}}. Tracking number: {{4}}. Thank you for your order.",
  },
  paymentFailed: {
    name: "payment_failed",
    language: "en",
    category: "UTILITY",
    phase: 1,
    variables: ["customerName", "itemName", "retryUrl"],
    bodyDraft:
      "Hello {{1}}, we could not complete payment for {{2}}. You can try again here: {{3}}. Please contact us if you need help.",
  },
  reminder24h: {
    name: "consultation_reminder_24h",
    language: "en",
    category: "UTILITY",
    phase: 2,
    variables: ["customerName", "consultationName", "dateTime", "joiningDetails"],
    bodyDraft:
      "Hello {{1}}, this is a reminder that your {{2}} is tomorrow at {{3}}. Session details: {{4}}. We look forward to speaking with you.",
  },
  reminder1h: {
    name: "consultation_reminder_1h",
    language: "en",
    category: "UTILITY",
    phase: 2,
    variables: ["customerName", "consultationName", "dateTime", "joiningDetails"],
    bodyDraft:
      "Hello {{1}}, your {{2}} begins in about one hour at {{3}}. Session details: {{4}}. We look forward to speaking with you.",
  },
} as const satisfies Record<string, WhatsAppTemplate>;

export type MessageEvent = keyof typeof whatsappTemplates;

export const emailSubjects: Record<MessageEvent, string> = {
  bookingPaymentConfirmed: "Payment confirmed for booking {ref}",
  bookingScheduled: "Consultation scheduled ({ref})",
  consultationFilesReady: "Your consultation files are ready ({ref})",
  orderConfirmed: "Order confirmed ({ref})",
  orderShipped: "Your order has shipped ({ref})",
  paymentFailed: "Payment could not be completed ({ref})",
  reminder24h: "Reminder: consultation in 24 hours ({ref})",
  reminder1h: "Reminder: consultation in one hour ({ref})",
};
