// Owners may add shared site configuration exports here; product catalogs stay private to repositories.
export { routes } from "./routes";
export { site } from "./site";
export { theme, type Theme } from "./theme";
export { navigation } from "./navigation";
export { business } from "./business";
export { shipping } from "./shipping";
export {
  messagingChannels,
  whatsappTemplates,
  emailSubjects,
  type MessageEvent,
  type WhatsAppTemplate,
} from "./messaging";

// Product and consultation catalogs are excluded to enforce repository access; fonts load separately.
