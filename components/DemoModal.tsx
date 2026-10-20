"use client";
import { createContext, useContext, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type Kind = "Book A Demo" | "Request Access";
const Ctx = createContext<{ open: (k: Kind) => void }>({ open: () => {} });
export const useDemo = () => useContext(Ctx);

export function DemoProvider({ children }: { children: React.ReactNode }) {
  const [kind, setKind] = useState<Kind | null>(null);
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [err, setErr] = useState("");
  const open = useCallback((k: Kind) => { setState("idle"); setErr(""); setKind(k); }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const fd = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fd, kind }),
      });
      const json = await res.json();
      if (!json.ok) { setErr(json.error); setState("error"); return; }
      setState("done");
    } catch {
      setErr("Network problem. Please try again."); setState("error");
    }
  }

  const field = "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-[15px] outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";
  return (
    <Ctx.Provider value={{ open }}>
      {children}
      <AnimatePresence>
        {kind && (
          <motion.div className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/60 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setKind(null)}>
            <motion.div role="dialog" aria-modal="true" aria-label={kind}
              className="w-full max-w-md rounded-2xl bg-white p-6 shadow-panel sm:p-8"
              initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 12, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}>
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-display text-2xl font-bold">{kind}</h2>
                  <p className="mt-1 text-sm text-slate2">Tell us about your shipping. We will call you back.</p>
                </div>
                <button onClick={() => setKind(null)} aria-label="Close" className="rounded-md p-1 text-slate2 hover:bg-mist"><X size={20} /></button>
              </div>
              {state === "done" ? (
                <div className="py-10 text-center">
                  <p className="font-display text-xl font-semibold">Request sent.</p>
                  <p className="mt-2 text-sm text-slate2">The UCS team will contact you on the number you provided.</p>
                  <button onClick={() => setKind(null)} className="mt-6 rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-white">Close</button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-6 space-y-3.5">
                  <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
                  <input name="name" required placeholder="Your name" className={field} />
                  <input name="business" placeholder="Business or brand name" className={field} />
                  <input name="phone" required type="tel" placeholder="Phone number (03XX XXXXXXX)" className={field} />
                  <select name="volume" defaultValue="" className={field}>
                    <option value="" disabled>Monthly shipments</option>
                    <option>Under 300</option><option>300 to 1,000</option><option>1,000 to 5,000</option><option>5,000+</option>
                  </select>
                  <textarea name="message" rows={3} placeholder="Anything we should know? (optional)" className={field} />
                  {state === "error" && <p role="alert" className="text-sm text-ucsred">{err}</p>}
                  <button disabled={state === "sending"} className="w-full rounded-lg bg-ucsred px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-ucsred-dark disabled:opacity-60">
                    {state === "sending" ? "Sending..." : "Send request"}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Ctx.Provider>
  );
}
