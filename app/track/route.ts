import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const number = url.searchParams.get("number")?.trim();
  
  if (!number) return NextResponse.json({ ok: false, error: "Missing tracking number" }, { status: 400 });

  // MOCK DATA: Replace this with real courier API calls later
  return NextResponse.json({ 
    ok: true, 
    data: {
      trackingNumber: number,
      courier: "Courier Partner A",
      status: "In transit",
      lastUpdate: new Date().toISOString().slice(0, 16).replace("T", " "),
      events: [
        { timestamp: "2026-11-04 09:12", status: "Picked up", location: "Lahore Hub" },
        { timestamp: "2026-11-04 22:40", status: "Departed origin facility", location: "Lahore" },
        { timestamp: "2026-11-05 11:05", status: "Arrived at destination facility", location: "Karachi" },
      ],
    }
  });
}