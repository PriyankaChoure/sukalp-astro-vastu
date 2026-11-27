// Owners may edit visible navigation labels and their route assignments here.
import { routes } from "./routes";

export const navigation = {
  header: [
    { label: "Home", href: routes.home },
    { label: "Consultations", href: routes.consultations },
    { label: "Shop", href: routes.shop },
    { label: "Blog", href: routes.blog },
    { label: "About", href: routes.about },
    { label: "Contact", href: routes.contact },
  ],
  headerCta: { label: "Book a Consultation", href: routes.consultations },
  footer: [
    {
      title: "Explore",
      links: [
        { label: "Consultations", href: routes.consultations },
        { label: "Shop", href: routes.shop },
        { label: "Blog", href: routes.blog },
        { label: "About Us", href: routes.about },
        { label: "Contact", href: routes.contact },
      ],
    },
    {
      title: "Policies",
      links: [
        { label: "Privacy Policy", href: routes.privacy },
        { label: "Terms & Conditions", href: routes.terms },
        { label: "Refund & Cancellation", href: routes.refunds },
        { label: "Shipping Policy", href: routes.shippingPolicy },
      ],
    },
  ],
} as const;
