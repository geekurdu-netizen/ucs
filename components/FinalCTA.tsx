"use client";
import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";
import { useDemo } from "./DemoModal";

export default function FinalCTA() {
  const { open } = useDemo();
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">
          Ready to bridge the gaps in your logistics network?
        </h2>
        <p className="mt-6 max-w-xl text-lg text-white/70">Unify your courier operations, make better delivery decisions and keep full control of your COD.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <button onClick={() => open("Book A Demo")} className="rounded-lg bg-ucsred px-7 py-3.5 font-semibold transition hover:bg-ucsred-dark">Book A Demo</button>
          <a href={`tel:${SITE.phoneTel}`} className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 font-semibold transition hover:bg-white/10"><Phone size={18} />Call {SITE.phoneDisplay}</a>
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 font-semibold transition hover:bg-white/10"><MessageCircle size={18} />WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
