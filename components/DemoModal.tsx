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
  
  const open = useCallback((k: Kind) => { 
    setState("idle"); 
    setErr(""); 
    setKind(k); 
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json", 
          Accept: "application/json" 
        },
        body: JSON.stringify({
          access_key: "d042d505-9245-4079-a8e4-d0a1bcfc83e8",
          subject: `UCS website: ${kind} from ${data.name}`,
          from_name: "UCS Website",
          Name: data.name,
          Phone: data.phone,
          Business: data.business || "-",
          "Monthly Shipments": data.volume || "-",
          Message: data.message || "-",
          Request_Type: kind,
        }),
      });

      const result = await res.json();
      
      if (result.success) {
        setState("done");
      } else {
        setErr(result.message || "Something went wrong. Please try again.");
        setState("error");
      }
    } catch (error) {
      setErr("Network problem. Please try again.");
      setState("error");
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
              
              {/* HEADER SECTION - Dynamically changes based on state */}
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-display text-2xl font-bold">
                    {state === "done" 
                      ? "Success" 
                      : (kind === "Book A Demo" ? "Book a Demo" : "Request Portal Access")}
                  </h2>
                  
                  {/* Only show description if NOT done */}
                  {state !== "done" && (
                    <p className="mt-1 text-sm text-slate2">
                      {kind === "Book A Demo" 
                        ? "Tell us about your shipping needs and we will call you back." 
                        : "Request login credentials to access the UCS merchant dashboard."}
                    </p>
                  )}
                </div>
                <button onClick={() => setKind(null)} aria-label="Close" className="rounded-md p-1 text-slate2 hover:bg-mist">
                  <X size={20} />
                </button>
              </div>

              {/* SUCCESS STATE */}
              {state === "done" ? (
                <div className="py-6 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 mb-6">
                    <svg className="h-8 w-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  <p className="text-[15px] leading-relaxed text-slate2">
                    Thank you for reaching out to Unilink Courier Solutions. A member of our commercial team will review your requirements and contact you within one business day.
                  </p>
                  
                  <div className="mt-8 border-t border-slate-100 pt-6">
                    <p className="text-sm font-semibold text-navy mb-4">Need immediate assistance?</p>
                    <p className="text-sm text-slate2 mb-4">
                      Call us at <a href="tel:+923158022220" className="font-semibold text-brand hover:underline">+92 315 8022220</a>
                    </p>
                    
                    <div className="flex items-center justify-center gap-4">
                      <a href="https://www.facebook.com/ucspak/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-mist p-2.5 text-navy transition hover:bg-brand-soft hover:text-brand" aria-label="Facebook">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                      </a>
                      <a href="https://www.linkedin.com/company/unilink-courier-solutions" target="_blank" rel="noopener noreferrer" className="rounded-full bg-mist p-2.5 text-navy transition hover:bg-brand-soft hover:text-brand" aria-label="LinkedIn">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                      </a>
                    </div>
                  </div>

                  <button onClick={() => setKind(null)} className="mt-8 w-full rounded-lg bg-navy px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-brand">
                    Close Window
                  </button>
                </div>
              ) : (
                /* FORM STATE */
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