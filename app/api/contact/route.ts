import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    if (data.website) return NextResponse.json({ ok: true }); // honeypot
    const name = String(data.name ?? "").trim().slice(0, 120);
    const phone = String(data.phone ?? "").trim().slice(0, 40);
    const business = String(data.business ?? "").trim().slice(0, 160);
    const volume = String(data.volume ?? "").trim().slice(0, 60);
    const message = String(data.message ?? "").trim().slice(0, 1500);
    const kind = String(data.kind ?? "Book A Demo").slice(0, 40);
    if (!name || phone.replace(/\D/g, "").length < 10) {
      return NextResponse.json({ ok: false, error: "Please enter your name and a valid phone number." }, { status: 400 });
    }
    const res = await fetch(`https://formsubmit.co/ajax/${SITE.email}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: `UCS website: ${kind} from ${name}`,
        _template: "table",
        _captcha: "false",
        Request: kind, Name: name, Phone: phone, Business: business,
        "Monthly shipments": volume, Message: message,
      }),
    });
    if (!res.ok) throw new Error("upstream");
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: `Could not send right now. Please call ${SITE.phoneDisplay} or email ${SITE.email}.` },
      { status: 500 }
    );
  }
}
