1. Roadmap (project checklist)

Paste this into your instructions as the checklist. Tick items off as we finish each module.

Parallel track (non-code, start now because these have waiting periods)

[ ] Razorpay account and KYC (live keys need website legal pages first)
[ ] Meta Business verification, WhatsApp Business number, and template approval
[ ] Resend account and sending-domain DNS (SPF/DKIM)
[ ] Domain purchase
[ ] GSTIN, HSN/SAC codes, and business address for invoices
[ ] Legal copy: Privacy, Terms, Refund/Cancellation, Shipping policy

Build modules

[✅] M0. Project setup: Next.js 14, TypeScript strict, Tailwind, lint/format, folder structure, env validation
[ ] M1. Config layer: site, theme, fonts, navigation, business/GST, shipping, messaging templates, products, consultation categories
[ ] M2. Design system and layout shell: Tailwind tokens driven by config, header, footer, WhatsApp floating button, base UI components
[ ] M3. Static pages: Home, About Us, Contact, legal pages (Razorpay needs these before going live)
[ ] M4. Database: Prisma schema, migrations, client singleton, seed script
[ ] M5. Shared server utilities: zod schemas, customer upsert (dedupe by email/WhatsApp), public IDs and signed tokens, rate limiting, spam protection
[ ] M6. Messaging: Resend email templates, WhatsApp Cloud API helper, WhatsApp-first with email fallback, notification log
[ ] M7. Razorpay core: order creation, signature verification, idempotent webhook, payment status handling (shared by shop and bookings)
[ ] M8. Shop catalog: product listing and detail pages, read through a repository (config now, DB later)
[ ] M9. Cart and checkout: persistent cart, customer and shipping details, server-side pricing, GST and shipping calculation, payment
[ ] M10. Consultation booking: category pages, astrology form (birth details and question), Vastu form, consent checkbox, payment
[ ] M11. Confirmations, invoices and digital delivery: token-protected confirmation pages, GST invoice PDF, private file storage, expiring download links
[ ] M12. Admin panel: owner login, dashboard, bookings (set slot, meeting link, status, notify), orders (ship, tracking), customers, payments, upload recording/PDF and deliver
[ ] M13. Blog: Sanity Studio for the writer, listing and post pages, categories
[ ] M14. SEO and analytics: metadata, sitemap, robots, structured data, GA4 or Plausible
[ ] M15. Hardening and tests: security review, unit tests for pricing and webhook, a Playwright smoke test of the payment flow, Sentry
[ ] M16. Deployment and go-live: hosting, env vars, webhooks pointed at production, live-mode payment test, go-live checklist
[ ] M17. Post-launch backlog: move products and categories from config to DB with admin CRUD, 24h/1h reminders via cron, abandoned-checkout follow-up, coupons
