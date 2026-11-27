import "server-only";
import { buildEnvSchema, formatEnvIssues, type Env } from "./env-schema";

let cached: Env | undefined;

function loadEnv(): Env {
  // Escape hatch for CI builds that don't have secrets: SKIP_ENV_VALIDATION=1
  const strict = process.env.NODE_ENV === "production" && process.env.SKIP_ENV_VALIDATION !== "1";
  const result = buildEnvSchema(strict).safeParse(process.env);
  if (!result.success) {
    throw new Error(`Invalid environment variables:\n${formatEnvIssues(result.error)}`);
  }
  return result.data;
}

/**
 * Validated server env. Validated lazily on first access, so `next build`
 * doesn't need secrets. Run `npm run check:env:strict` before deploying.
 */
export const env: Env = new Proxy({} as Env, {
  get(_target, prop) {
    if (typeof prop !== "string") return undefined;
    cached ??= loadEnv();
    return cached[prop as keyof Env];
  },
});

/** Use when a feature can't work without a key that is optional in development. */
export function requireEnv<K extends keyof Env>(key: K): NonNullable<Env[K]> {
  const value = env[key];
  if (value === undefined || value === null || value === "") {
    throw new Error(`Missing required environment variable: ${String(key)}`);
  }
  return value as NonNullable<Env[K]>;
}
