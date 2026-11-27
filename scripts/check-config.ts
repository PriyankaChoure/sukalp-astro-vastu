import { business, emailSubjects, shipping, site, whatsappTemplates } from "../src/config";
import { consultations } from "../src/config/consultations";
import { products } from "../src/config/products";

const findings: string[] = [];

function collectPlaceholders(value: unknown, path: string): void {
  if (typeof value === "string") {
    if (value.includes("REPLACE_ME")) {
      findings.push(`${path}: ${value}`);
    }
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((item, index) => collectPlaceholders(item, `${path}[${index}]`));
    return;
  }

  if (value !== null && typeof value === "object") {
    for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
      collectPlaceholders(child, path ? `${path}.${key}` : key);
    }
  }
}

collectPlaceholders({ site, business, shipping, whatsappTemplates, emailSubjects }, "config");

products.forEach((product, index) => {
  if (product.sample === true) {
    findings.push(`products[${index}]: sample item ${product.id}`);
  }
});

consultations.forEach((consultation, index) => {
  if (consultation.sample === true) {
    findings.push(`consultations[${index}]: sample item ${consultation.id}`);
  }
});

console.log(
  `Loaded ${products.length} products and ${consultations.length} consultation categories.`,
);

if (findings.length > 0) {
  console.log("Configuration findings:");
  findings.forEach((finding) => console.log(`- ${finding}`));
}

if (process.argv.includes("--strict") && findings.length > 0) {
  process.exitCode = 1;
}
