"use client";
import { useState } from "react";

export function UniversalTracker({ role }: { role: "public" | "admin" }) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<any>(null);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  async function onTrack(e: React.FormEvent) {
    e.preventDefault();
    setErr(""); setResult(null); setLoading(true);
    try {
      const res = await fetch(`/api/track?number=${encodeURIComponent(query)}`);
      const json = await res.json();
      if (!json.ok) setErr(json.error ?? "Tracking not found. Please check the number.");
      else setResult(json.data);
    } catch {
      setErr("Network error. Please retry.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl p-6 bg-white rounded-2xl shadow-panel my-10 border border-slate-200">
      <h1 className="font-display text-3xl font-extrabold tracking-tight text-center">Track Your Shipment</h1>
      <p className="mt-1 text-sm text-slate2 text-center mb-8">Enter your tracking number below to see the latest status.</p>

      <form onSubmit={onTrack} className="flex flex-col sm:flex-row gap-3">
        <input 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="e.g. UCS-12345678" 
          className="flex-1 rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" 
        />
        <button disabled={loading || !query} className="rounded-lg bg-ucsred px-6 py-3 font-semibold text-white disabled:opacity-60 transition hover:bg-ucsred-dark">
          {loading ? "Tracking..." : "Track"}
        </button>
      </form>

      {err && <p className="mt-4 text-sm text-ucsred text-center font-semibold">{err}</p>}

      {result && (
        <div className="mt-8 border-t border-slate-200 pt-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 bg-mist p-4 rounded-xl">
            <div><p className="text-[11px] font-semibold uppercase tracking-wide text-slate2">Tracking #</p><p className="mt-0.5 font-display text-sm font-bold">{result.trackingNumber}</p></div>
            <div><p className="text-[11px] font-semibold uppercase tracking-wide text-slate2">Courier</p><p className="mt-0.5 font-display text-sm font-bold">{result.courier}</p></div>
            <div><p className="text-[11px] font-semibold uppercase tracking-wide text-slate2">Status</p><p className="mt-0.5 font-display text-sm font-bold text-brand">{result.status}</p></div>
            <div><p className="text-[11px] font-semibold uppercase tracking-wide text-slate2">Last update</p><p className="mt-0.5 font-display text-sm font-bold">{result.lastUpdate}</p></div>
          </div>

          <ol className="mt-8 space-y-6 border-l-2 border-brand/30 pl-5 ml-2">
            {result.events.map((e: any, i: number) => (
              <li key={i} className="relative">
                <span className={`absolute -left-[27px] top-1 h-3.5 w-3.5 rounded-full ring-4 ring-white ${i === 0 ? "bg-ucsred" : "bg-slate-300"}`} />
                <p className="text-sm font-bold">{e.status}</p>
                <p className="text-xs text-slate2">{e.timestamp}{e.location ? ` — ${e.location}` : ""}</p>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}