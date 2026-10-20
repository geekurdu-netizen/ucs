import { ShieldCheck, ReceiptText, ScrollText } from "lucide-react";

const pkr = (n: number) => "PKR " + n.toLocaleString("en-PK");
const rows = [
  ["Batch 0412", "Courier Partner A", 842500, 842500, "Matched"],
  ["Batch 0413", "Courier Partner B", 615200, 615200, "Matched"],
  ["Batch 0414", "Regional Partner D", 238900, 220500, "Short PKR 18,400"],
  ["Batch 0415", "Courier Partner C", 509400, 0, "Awaiting"],
];
const points = [
  [ShieldCheck, "Collections monitored", "Every COD amount is tracked from courier collection to settlement."],
  [ReceiptText, "Courier charges verified", "Freight invoices are checked against agreed rates before you pay."],
  [ScrollText, "Settlement records kept", "Accurate records of what was collected, charged and paid."],
] as const;

export default function Finance() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">Every rupee accounted for.</h2>
          <p className="mt-5 max-w-lg text-lg text-slate2">
            Multiple couriers mean multiple payment cycles. We keep them in one place so your books match your deliveries.
          </p>
          <ul className="mt-9 space-y-6">
            {points.map(([Icon, t, d]) => (
              <li key={t} className="flex gap-4">
                <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand"><Icon size={20} /></span>
                <div><h3 className="font-display text-lg font-bold">{t}</h3><p className="text-slate2">{d}</p></div>
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-panel">
          <div className="flex items-center justify-between border-b border-slate-100 bg-mist px-5 py-3">
            <span className="text-sm font-bold">COD settlement</span>
            <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-slate2 ring-1 ring-slate-200">Illustrative preview</span>
          </div>
          <div className="grid grid-cols-3 gap-3 p-5">
            {[["Collected", pkr(2206000)], ["Settled", pkr(1678200)], ["Pending", pkr(527800)]].map(([k, v]) => (
              <div key={k}><p className="text-xs font-semibold text-slate2">{k}</p><p className="mt-1 font-display text-base font-bold sm:text-lg">{v}</p></div>
            ))}
          </div>
          <div className="overflow-x-auto px-5 pb-5">
            <table className="w-full min-w-[460px] text-left text-[13px]">
              <thead className="text-xs text-slate2"><tr><th className="py-2 font-semibold">Batch</th><th className="font-semibold">Courier</th><th className="text-right font-semibold">Expected</th><th className="text-right font-semibold">Received</th><th className="text-right font-semibold">Status</th></tr></thead>
              <tbody>
                {rows.map(([b, c, e, r, s]) => (
                  <tr key={b as string} className="border-t border-slate-100">
                    <td className="py-3 font-semibold">{b}</td><td className="text-slate2">{c}</td>
                    <td className="text-right tabular-nums">{(e as number).toLocaleString("en-PK")}</td>
                    <td className="text-right tabular-nums">{(r as number).toLocaleString("en-PK")}</td>
                    <td className="text-right"><span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${s === "Matched" ? "bg-brand-soft text-brand" : s === "Awaiting" ? "bg-mist text-slate2" : "bg-ucsred/10 text-ucsred"}`}>{s}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
