"use client";
import { motion } from "framer-motion";
import { useDemo } from "./DemoModal";
import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  const { open } = useDemo();
  return (
    <section className="relative overflow-hidden">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-14 lg:grid-cols-[1fr_1.15fr] lg:gap-12 lg:px-8 lg:pb-28 lg:pt-20">
        <div>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="font-display text-[2.6rem] font-extrabold leading-[1.04] tracking-tight sm:text-6xl">
            One management layer for every courier you use.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate2">
            Unilink Courier Solutions connects merchants and courier partners through one coordinated framework. We allocate each shipment, follow it to the last link, handle exceptions and returns, and reconcile every COD rupee.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-9 flex flex-wrap gap-3">
            <button onClick={() => open("Book A Demo")} className="rounded-lg bg-ucsred px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-ucsred/25 transition hover:bg-ucsred-dark">Book A Demo</button>
            <a href="#services" className="rounded-lg border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold transition hover:border-brand hover:text-brand">Explore Services</a>
          </motion.div>
          <p className="mt-6 text-sm text-slate2">Pricing is agreed per merchant. Contact us for rates.</p>
        </div>
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
          <DashboardPreview />
        </motion.div>
      </div>
    </section>
  );
}
