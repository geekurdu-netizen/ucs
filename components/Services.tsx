import { Layers, Route, PackageSearch, Undo2, Banknote, BarChart3 } from "lucide-react";

const items = [
  { icon: Layers, t: "Managed Courier Aggregation", d: "We coordinate multiple courier providers through one centralized management framework, so you deal with one team instead of many.", span: "lg:col-span-4", dark: true },
  { icon: Route, t: "Smart Courier Allocation", d: "Each shipment is matched with a suitable courier based on destination coverage, commercial rates and service performance.", span: "lg:col-span-2" },
  { icon: PackageSearch, t: "Pickup and Shipment Monitoring", d: "We track shipment progress and follow up on operational exceptions.", span: "lg:col-span-2" },
  { icon: Undo2, t: "Delivery and Returns Management", d: "Delivery follow-ups, resolution of unsuccessful deliveries and return-to-origin (RTO) monitoring.", span: "lg:col-span-2" },
  { icon: Banknote, t: "COD and Freight Reconciliation", d: "Monitor collections, verify courier charges and keep accurate settlement records.", span: "lg:col-span-2" },
  { icon: BarChart3, t: "Performance Analytics and MIS", d: "Reports on delivery success, returns, costs and courier performance, so decisions rest on data.", span: "lg:col-span-6", wide: true },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
        More than courier booking. We manage the whole delivery lifecycle.
      </h2>
      <p className="mt-5 max-w-2xl text-lg text-slate2">
        A centralized approach to managing your courier relationships, from the moment an order is ready to the moment the money is settled.
      </p>
      <div className="mt-12 grid gap-4 lg:grid-cols-6">
        {items.map(({ icon: Icon, t, d, span, dark, wide }) => (
          <article key={t}
            className={`${span} group rounded-2xl p-7 transition ${dark ? "bg-brand text-white" : "bg-mist hover:bg-brand-soft"} ${wide ? "flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8" : ""}`}>
            <Icon size={dark ? 34 : 28} strokeWidth={1.7} className={dark ? "text-white" : "text-brand"} />
            <div className={wide ? "" : "mt-6"}>
              <h3 className={`font-display font-bold ${dark ? "text-2xl" : "text-xl"}`}>{t}</h3>
              <p className={`mt-2 max-w-xl leading-relaxed ${dark ? "text-white/80" : "text-slate2"}`}>{d}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
