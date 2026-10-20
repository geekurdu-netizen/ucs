"use client";
import { motion } from "framer-motion";

const pains = [
  ["Fragmented communication", "Every courier has its own contact, its own process and its own follow-up rhythm."],
  ["Inconsistent service levels", "The same city can be a strong lane with one courier and a weak one with another."],
  ["Limited visibility", "Shipment status lives in separate portals, so exceptions are found late."],
  ["Irregular payment cycles", "COD and freight statements arrive on different schedules and rarely match."],
];

function Link({ red = false }: { red?: boolean }) {
  return <span className={`block h-11 w-24 shrink-0 rounded-full border-[7px] ${red ? "border-ucsred" : "border-white/35"}`} />;
}

export default function Gap() {
  return (
    <section className="bg-navy text-white" aria-labelledby="gap-h">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <h2 id="gap-h" className="max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
          When one link in the chain breaks, the delivery breaks with it.
        </h2>

        <div className="my-14 flex items-center overflow-hidden" aria-hidden>
          <div className="flex shrink-0 -space-x-5">{[0, 1, 2, 3].map((i) => <Link key={i} />)}</div>
          <motion.div className="z-10 -mx-5 shrink-0"
            initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true, margin: "-20%" }}
            transition={{ delay: 0.9, duration: 0.5, type: "spring", stiffness: 160 }}>
            <Link red />
          </motion.div>
          <motion.div className="flex shrink-0 -space-x-5"
            initial={{ x: 110 }} whileInView={{ x: 0 }} viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}>
            {[0, 1, 2, 3, 4, 5].map((i) => <Link key={i} />)}
          </motion.div>
        </div>

        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {pains.map(([t, d]) => (
            <div key={t} className="border-t border-white/20 pt-5">
              <h3 className="font-display text-lg font-bold">{t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/65">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-14 max-w-2xl text-lg leading-relaxed text-white/80">
          Unilink Courier Solutions brings these disconnected activities under one coordinated management framework, so logistics becomes easier to control and more transparent.
        </p>
      </div>
    </section>
  );
}
