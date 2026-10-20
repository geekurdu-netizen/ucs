"use client";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Route } from "lucide-react";

const pkr = (n: number) => "PKR " + n.toLocaleString("en-PK");
const couriers = [
  { name: "Courier Partner A", rate: 94, load: 38 },
  { name: "Courier Partner B", rate: 91, load: 27 },
  { name: "Courier Partner C", rate: 88, load: 21 },
  { name: "Regional Partner D", rate: 86, load: 14 },
];
const bars = [42, 55, 48, 66, 72, 61, 84];

export default function DashboardPreview() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-br from-brand/15 via-transparent to-ucsred/10 blur-2xl" />
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-panel">
        <div className="flex items-center justify-between border-b border-slate-100 bg-mist px-4 py-2.5">
          <div className="flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-slate-300" /><i className="h-2.5 w-2.5 rounded-full bg-slate-300" /><i className="h-2.5 w-2.5 rounded-full bg-slate-300" /></div>
          <span className="text-xs font-semibold text-slate2">Operations overview</span>
          <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-slate2 ring-1 ring-slate-200">Illustrative preview</span>
        </div>

        <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-4">
          {[
            ["Orders today", "1,284"],
            ["Delivery rate", "92.4%"],
            ["COD in transit", pkr(4182500)],
            ["Merchants", "46"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl border border-slate-100 p-3">
              <p className="text-[11px] font-semibold text-slate2">{k}</p>
              <p className="mt-1 font-display text-lg font-bold leading-tight sm:text-[17px]">{v}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-3 px-4 pb-4 md:grid-cols-5">
          <div className="rounded-xl border border-slate-100 p-3.5 md:col-span-3">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold">Orders, last 7 days</p>
              <p className="text-[11px] text-slate2">All couriers</p>
            </div>
            <div className="mt-3 flex h-28 items-end gap-2">
              {bars.map((h, i) => (
                <motion.div key={i} className={`flex-1 rounded-t-md ${i === 6 ? "bg-ucsred" : "bg-brand/80"}`}
                  initial={{ height: 0 }} animate={{ height: `${h}%` }}
                  transition={{ delay: 0.4 + i * 0.07, duration: 0.7, ease: "easeOut" }} />
              ))}
            </div>
            <div className="mt-3 space-y-2">
              {couriers.map((c) => (
                <div key={c.name} className="flex items-center gap-2 text-[11px]">
                  <span className="w-28 shrink-0 truncate font-semibold">{c.name}</span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                    <motion.div className="h-full rounded-full bg-navy" initial={{ width: 0 }} animate={{ width: `${c.rate}%` }} transition={{ delay: 0.9, duration: 0.9 }} />
                  </div>
                  <span className="w-9 text-right tabular-nums text-slate2">{c.rate}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3 md:col-span-2">
            <div className="rounded-xl border border-slate-100 p-3.5">
              <p className="flex items-center gap-1.5 text-xs font-bold"><Route size={14} className="text-brand" />Allocation rules</p>
              <ul className="mt-2 space-y-1.5 text-[11px] text-slate2">
                <li className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-brand" />Lahore to Karachi: best delivery rate</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-brand" />Remote cities: widest coverage</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-brand" />High COD value: priority partner</li>
              </ul>
            </div>
            <div className="rounded-xl border border-ucsred/20 bg-ucsred/[0.04] p-3.5">
              <p className="flex items-center gap-1.5 text-xs font-bold"><AlertTriangle size={14} className="text-ucsred" />Needs attention</p>
              <ul className="mt-2 space-y-1.5 text-[11px] text-navy/80">
                <li>12 failed deliveries awaiting follow-up</li>
                <li>3 RTO shipments pending return</li>
                <li>COD short-settlement: PKR 18,400</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
