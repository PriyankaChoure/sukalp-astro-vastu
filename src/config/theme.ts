// Owners may edit these design tokens to change the visual identity.
export const theme = {
  colors: {
    primary: { DEFAULT: "#8B1E3F", foreground: "#FFFFFF", soft: "#F8E8EC" },
    secondary: { DEFAULT: "#9A6B00", foreground: "#FFFFFF", soft: "#F8F0DA" },
    accent: { DEFAULT: "#C2410C", foreground: "#FFFFFF", soft: "#FDEBDD" },
    background: "#FFFBF5",
    surface: "#FFFFFF",
    foreground: "#2B1B17",
    muted: "#F4ECE2",
    mutedForeground: "#6B5B53",
    border: "#EADFD3",
    success: { DEFAULT: "#2F855A", soft: "#E6F4EC" },
    warning: { DEFAULT: "#92610A", soft: "#FBF1DC" },
    danger: { DEFAULT: "#C53030", soft: "#FBE9E9" },
  },
  radius: {
    sm: "0.375rem",
    md: "0.625rem",
    lg: "1rem",
    full: "9999px",
  },
  layout: {
    containerMaxWidth: "72rem",
    headerHeight: "4.5rem",
    sectionSpacing: "5rem",
  },
  shadow: {
    card: "0 1px 3px rgba(43, 27, 23, 0.08), 0 8px 24px rgba(43, 27, 23, 0.06)",
  },
  fontVariables: {
    heading: "--font-heading",
    body: "--font-body",
  },
} as const;

export type Theme = typeof theme;
