// Owners may edit the font families and weights used by the app.
import { Cormorant_Garamond, Inter } from "next/font/google";

export const fontHeading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const fontVariableClasses = `${fontHeading.variable} ${fontBody.variable}`;
