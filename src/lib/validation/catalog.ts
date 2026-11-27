import { z } from "zod";

export const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);

export const rupees = z
  .number()
  .positive()
  .refine(
    (value) => Number.isFinite(value) && Number(value.toFixed(2)) === value,
    "Must be a positive amount with no more than 2 decimal places.",
  );

export const gstRatePercent = z.number().min(0).max(40);

export const taxCode = z.string().regex(/^\d{4,8}$/);

export const publicPath = z.string().startsWith("/");

export const productConfigSchema = z
  .object({
    id: z.string().min(1),
    slug,
    sample: z.boolean().optional(),
    name: z.string().min(2).max(80),
    shortDescription: z.string().min(10).max(160),
    description: z.string().min(10),
    highlights: z.array(z.string()).default([]),
    category: slug,
    type: z.enum(["PHYSICAL", "DIGITAL"]),
    priceInr: rupees,
    mrpInr: rupees.optional(),
    gstRatePercent,
    hsnCode: taxCode,
    weightGrams: z.number().int().positive().optional(),
    images: z.array(publicPath).min(1),
    inStock: z.boolean().default(true),
    active: z.boolean().default(true),
    featured: z.boolean().default(false),
    sortOrder: z.number().int().default(100),
  })
  .superRefine((product, context) => {
    if (product.mrpInr !== undefined && product.mrpInr < product.priceInr) {
      context.addIssue({
        code: "custom",
        path: ["mrpInr"],
        message: "MRP must be greater than or equal to price.",
      });
    }
  });

export const consultationConfigSchema = z.object({
  id: z.string().min(1),
  slug,
  sample: z.boolean().optional(),
  name: z.string().min(2).max(80),
  kind: z.enum(["ASTROLOGY", "VASTU"]),
  shortDescription: z.string().min(10).max(160),
  description: z.string().min(10),
  includes: z.array(z.string()).min(1),
  priceInr: rupees,
  gstRatePercent,
  sacCode: taxCode,
  durationMinutes: z.number().int().positive(),
  mode: z.enum(["PHONE", "VIDEO"]),
  deliverables: z
    .object({
      recording: z.boolean(),
      pdfReport: z.boolean(),
    })
    .default({ recording: true, pdfReport: true }),
  active: z.boolean().default(true),
  sortOrder: z.number().int().default(100),
});

export type ProductConfig = z.output<typeof productConfigSchema>;
export type ProductConfigInput = z.input<typeof productConfigSchema>;
export type ConsultationConfig = z.output<typeof consultationConfigSchema>;
export type ConsultationConfigInput = z.input<typeof consultationConfigSchema>;

function formatPath(path: PropertyKey[]): string {
  return path
    .map((part) =>
      typeof part === "number"
        ? `[${part}]`
        : typeof part === "string"
          ? `.${part}`
          : `.[${String(part)}]`,
    )
    .join("");
}

const productsSchema = z.array(productConfigSchema).superRefine((items, context) => {
  const ids = new Set<string>();
  const slugs = new Set<string>();

  items.forEach((item, index) => {
    if (ids.has(item.id)) {
      context.addIssue({
        code: "custom",
        path: [index],
        message: "Duplicate product id.",
      });
    } else {
      ids.add(item.id);
    }

    if (slugs.has(item.slug)) {
      context.addIssue({
        code: "custom",
        path: [index],
        message: "Duplicate product slug.",
      });
    } else {
      slugs.add(item.slug);
    }
  });
});

const consultationsSchema = z.array(consultationConfigSchema).superRefine((items, context) => {
  const ids = new Set<string>();
  const slugs = new Set<string>();

  items.forEach((item, index) => {
    if (ids.has(item.id)) {
      context.addIssue({
        code: "custom",
        path: [index],
        message: "Duplicate consultation id.",
      });
    } else {
      ids.add(item.id);
    }

    if (slugs.has(item.slug)) {
      context.addIssue({
        code: "custom",
        path: [index],
        message: "Duplicate consultation slug.",
      });
    } else {
      slugs.add(item.slug);
    }
  });
});

export function defineProducts(items: ProductConfigInput[]): ProductConfig[] {
  const result = productsSchema.safeParse(items);

  if (!result.success) {
    const issues = result.error.issues
      .map((issue) => `  - products${formatPath(issue.path)}: ${issue.message}`)
      .join("\n");
    throw new Error(`Invalid products config:\n${issues}`);
  }

  return result.data;
}

export function defineConsultations(items: ConsultationConfigInput[]): ConsultationConfig[] {
  const result = consultationsSchema.safeParse(items);

  if (!result.success) {
    const issues = result.error.issues
      .map((issue) => `  - consultations${formatPath(issue.path)}: ${issue.message}`)
      .join("\n");
    throw new Error(`Invalid consultations config:\n${issues}`);
  }

  return result.data;
}
