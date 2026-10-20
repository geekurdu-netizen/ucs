"use client";
import { SITE } from "@/lib/site";
import { useDemo } from "./DemoModal";

export default function Pricing() {
  const { open } = useDemo();
  return (
    <section id="pricing" className="bg-brand-soft">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Rates built around your shipments.</h2>
          <p className="mt-3 text-lg text-slate2">Pricing depends on your volumes, destinations and parcel profile. Contact us for rates and we will quote in PKR.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button onClick={() => open("Book A Demo")} className="rounded-lg bg-navy px-6 py-3.5 font-semibold text-white transition hover:bg-brand">Contact us for rates</button>
          <a href={`tel:${SITE.phoneTel}`} className="rounded-lg border border-navy/20 bg-white px-6 py-3.5 font-semibold transition hover:border-brand">{SITE.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
