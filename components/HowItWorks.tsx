"use client";
import { motion } from "framer-motion";

const steps = [
  ["Merchant orders", "Your confirmed orders reach UCS."],
  ["Courier allocation", "Each parcel is matched to the best-suited courier."],
  ["Pickup", "Collection from your location is arranged and followed up."],
  ["Shipment monitoring", "Progress is tracked and exceptions are chased."],
  ["Delivery or return", "Delivered, re-attempted or returned to origin, with every step followed."],
  ["COD collection", "Cash collected by couriers is monitored against orders."],
  ["Reconciliation and reporting", "Collections and freight are verified and reported to you."],
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-mist">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
          Every delivery, followed to the last link.
        </h2>
        <ol className="relative mt-16 grid gap-10 lg:grid-cols-7 lg:gap-5">
          <motion.div aria-hidden className="absolute left-[7px] top-2 hidden h-[2px] w-full origin-left bg-ucsred lg:block lg:left-0 lg:right-0"
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, margin: "-15%" }} transition={{ duration: 1.6, ease: "easeInOut" }} />
          <div aria-hidden className="absolute bottom-2 left-[7px] top-2 w-[2px] bg-ucsred/40 lg:hidden" />
          {steps.map(([t, d], i) => (
            <li key={t} className="relative pl-9 lg:pl-0 lg:pt-10">
              <motion.span className="absolute left-0 top-1 h-4 w-4 rounded-full border-[3px] border-ucsred bg-white lg:top-0"
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: "-15%" }} transition={{ delay: 0.2 + i * 0.2 }} />
              <h3 className="font-display text-lg font-bold leading-snug">{t}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-slate2">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
