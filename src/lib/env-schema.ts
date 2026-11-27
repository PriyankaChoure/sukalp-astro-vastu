import { z } from "zod";

/** Treat blank strings (e.g. "KEY=" in a .env file) as "not set". */
const blankToUndefined = (value: unknown) =>
  typeof value === "string" && value.trim() === "" ? undefined : value;

const SITE_URL_FALLBACK = "http://localhost:3000";

/**
 * strict = true  -> production rules: every integration key must be present.
 * strict = false -> dev/test rules: integration keys are optional, so we can
 *                   build module by module before every account exists.
 */
export function buildEnvSchema(strict: boolean) {
  const required = <T extends z.ZodTypeAny>(schema: T) =>
    z.preprocess(blankToUndefined, strict ? schema : schema.optional());

  const text = () => z.string().min(1);

  return z.object({
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),

    // App
    NEXT_PUBLIC_SITE_URL: z
      .preprocess(blankToUndefined, z.string().url().default(SITE_URL_FALLBACK))
      .transform((value) => value.replace(/\/+$/, "")),

    // Database (M4)
    DATABASE_URL: required(z.string().url()),
    DIRECT_URL: required(z.string().url()),

    // Razorpay (M7)
    RAZORPAY_KEY_ID: required(text()),
    RAZORPAY_KEY_SECRET: required(text()),
    RAZORPAY_WEBHOOK_SECRET: required(text()),
    NEXT_PUBLIC_RAZORPAY_KEY_ID: required(text()),

    // Email (M6)
    RESEND_API_KEY: required(text()),
    EMAIL_FROM: required(text()),

    // WhatsApp Cloud API (M6)
    WHATSAPP_PHONE_NUMBER_ID: required(text()),
    WHATSAPP_ACCESS_TOKEN: required(text()),
    WHATSAPP_VERIFY_TOKEN: required(text()),

    // Private file storage (M11)
    R2_ACCOUNT_ID: required(text()),
    R2_ACCESS_KEY_ID: required(text()),
    R2_SECRET_ACCESS_KEY: required(text()),
    R2_BUCKET: required(text()),

    // Admin + signed tokens (M5, M12)
    ADMIN_EMAIL: required(z.string().email()),
    ADMIN_PASSWORD_HASH: required(text()),
    AUTH_SECRET: required(z.string().min(32, "must be at least 32 characters")),

    // Spam protection and rate limiting (M5)
    UPSTASH_REDIS_REST_URL: required(z.string().url()),
    UPSTASH_REDIS_REST_TOKEN: required(text()),
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: required(text()),
    TURNSTILE_SECRET_KEY: required(text()),

    // Blog (M13)
    NEXT_PUBLIC_SANITY_PROJECT_ID: required(text()),
    NEXT_PUBLIC_SANITY_DATASET: z.preprocess(blankToUndefined, z.string().default("production")),
  });
}

export type Env = z.infer<ReturnType<typeof buildEnvSchema>>;

/** Lists problems by variable name only. Never prints values (they may be secrets). */
export function formatEnvIssues(error: z.ZodError): string {
  return error.issues.map((issue) => `  - ${issue.path.join(".")}: ${issue.message}`).join("\n");
}
