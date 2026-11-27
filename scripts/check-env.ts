import { loadEnvConfig } from "@next/env";
import { buildEnvSchema, formatEnvIssues } from "../src/lib/env-schema";

loadEnvConfig(process.cwd());

const strict = process.argv.includes("--strict");
const result = buildEnvSchema(strict).safeParse(process.env);

if (!result.success) {
  console.error(formatEnvIssues(result.error));
  process.exitCode = 1;
} else {
  console.log("Environment OK");
}
