import { NextResponse } from "next/server";
import { env } from "@/lib/env";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json({ ok: true, env: env.NODE_ENV });
}
