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
      setErr("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-4xl bg-white rounded-2xl shadow-panel border border-slate-200 overflow-hidden">
      
      {/* Header section of the tracker */}
      <div className="bg-navy px-6 py-10 text-center sm:px-12">
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Track Your Shipment
        </h1>
        <p className="mt-2 text-sm text-white/70">
          Enter your UCS tracking number below to see the latest delivery status.
        </p>
        
        <form onSubmit={onTrack} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
          <input 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            placeholder="e.g. UCS-12345678" 
            className="flex-1 rounded-lg border-0 px-4 py-3.5 text-navy outline-none ring-2 ring-transparent transition focus:ring-ucsred" 
          />
          <button 
            disabled={loading || !query} 
            className="rounded-lg bg-ucsred px-8 py-3.5 font-semibold text-white shadow-lg shadow-ucsred/25 transition hover:bg-ucsred-dark disabled:opacity-60"
          >
            {loading ? "Tracking..." : "Track Shipment"}
          </button>
        </form>
        {err && <p className="mt-4 text-sm text-ucsred font-semibold bg-white/10 py-2 rounded-lg">{err}</p>}
      </div>

      {/* Results section */}
      {result && (
        <div className="p-6 sm:p-10">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 bg-mist p-5 rounded-xl border border-slate-100">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate2">Tracking #</p>
              <p className="mt-1 font-display text-base font-bold text-navy">{result.trackingNumber}</p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate2">Courier</p>
              <p className="mt-1 font-display text-base font-bold text-navy">{result.courier}</p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate2">Status</p>
              <p className="mt-1 font-display text-base font-bold text-brand">{result.status}</p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate2">Last update</p>
              <p className="mt-1 font-display text-base font-bold text-navy">{result.lastUpdate}</p>
            </div>
          </div>

          <h3 className="mt-10 mb-6 font-display text-xl font-bold text-navy border-b border-slate-100 pb-4">Tracking History</h3>
          
          <ol className="space-y-8 border-l-2 border-brand/20 pl-6 ml-3">
            {result.events.map((e: any, i: number) => (
              <li key={i} className="relative">
                <span className={`absolute -left-[33px] top-1 h-4 w-4 rounded-full ring-4 ring-white ${i === 0 ? "bg-ucsred" : "bg-slate-300"}`} />
                <p className={`text-base font-bold ${i === 0 ? "text-navy" : "text-slate2"}`}>{e.status}</p>
                <p className="mt-1 text-sm text-slate-500 font-medium">
                  {e.timestamp} {e.location ? `— ${e.location}` : ""}
                </p>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}