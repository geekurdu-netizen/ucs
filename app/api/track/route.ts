import { NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/service";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const number = url.searchParams.get("number")?.trim();
  
  if (!number) {
    return NextResponse.json({ ok: false, error: "Missing tracking number" }, { status: 400 });
  }

  const supabase = createServiceClient();

  // 1. Search for the shipment in Supabase by internal reference or courier tracking number
  const { data: shipment, error: shipmentError } = await supabase
    .from("shipments")
    .select(`
      id,
      ucs_ref_number,
      courier_tracking_number,
      status,
      created_at,
      couriers (name, slug)
    `)
    .or(`ucs_ref_number.eq.${number},courier_tracking_number.eq.${number}`)
    .maybeSingle();

  if (shipmentError || !shipment) {
    return NextResponse.json(
      { ok: false, error: "Tracking number not found. Please check and try again." },
      { status: 404 }
    );
  }

  // 2. Fetch tracking/timeline events for this shipment
  const { data: events } = await supabase
    .from("shipment_events")
    .select("status, remarks, created_at")
    .eq("shipment_id", shipment.id)
    .order("created_at", { ascending: false });

  // 3. Format timeline events for the tracker frontend
  const formattedEvents = (events || []).map((ev: any) => ({
    timestamp: new Date(ev.created_at).toISOString().slice(0, 16).replace("T", " "),
    status: ev.status,
    location: ev.remarks || ""
  }));

  const lastEventTime = formattedEvents.length > 0 
    ? formattedEvents[0].timestamp 
    : new Date(shipment.created_at).toISOString().slice(0, 16).replace("T", " ");

  const courierName = (shipment.couriers as any)?.name || "UCS Own Fleet";

  return NextResponse.json({ 
    ok: true, 
    data: {
      trackingNumber: shipment.courier_tracking_number || shipment.ucs_ref_number,
      courier: courierName,
      status: shipment.status,
      lastUpdate: lastEventTime,
      events: formattedEvents.length > 0 ? formattedEvents : [
        {
          timestamp: new Date(shipment.created_at).toISOString().slice(0, 16).replace("T", " "),
          status: shipment.status,
          location: "Shipment created and booked."
        }
      ]
    }
  });
}