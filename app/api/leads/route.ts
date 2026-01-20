import { NextResponse } from "next/server";
import leadsData from "@/data/leads.json";
import type { Lead } from "@/lib/types";

export async function GET() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const leads: Lead[] = leadsData;

    return NextResponse.json(leads, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
      },
    });
  } catch (error) {
    console.error("Error fetching leads:", error);
    return NextResponse.json(
      { error: "Failed to fetch leads" },
      { status: 500 }
    );
  }
}
