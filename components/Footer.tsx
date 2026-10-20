import Logo from "./Logo";
import { SITE } from "@/lib/site";

const cols = [
  ["Services", [["Courier Aggregation", "#services"], ["Courier Allocation", "#services"], ["Shipment Monitoring", "#services"], ["Returns Management", "#services"], ["COD Reconciliation", "#services"], ["Analytics and MIS", "#services"]]],
  ["Who We Serve", [["E-commerce Businesses", "#who-we-serve"], ["D2C Brands", "#who-we-serve"], ["Social Sellers", "#who-we-serve"], ["Enterprises", "#who-we-serve"]]],
  ["Company", [["About", "#about"], ["How It Works", "#how-it-works"], ["Pricing", "#pricing"]]],
] as const;

export default function Footer() {
  return (
    <footer className="bg-navy-800 text-white" style={{ backgroundColor: "#01102a" }}>
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.4fr_repeat(3,1fr)_1.3fr] lg:px-8">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">A managed courier aggregation and e-commerce logistics company serving merchants across Pakistan.</p>
        </div>
        {cols.map(([h, links]) => (
          <div key={h}>
            <h3 className="font-display text-base font-bold">{h}</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/65">
              {links.map(([l, href]) => <li key={l}><a href={href} className="transition hover:text-white">{l}</a></li>)}
            </ul>
          </div>
        ))}
        <div>
          <h3 className="font-display text-base font-bold">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/65">
            <li><a href={`tel:${SITE.phoneTel}`} className="transition hover:text-white">{SITE.phoneDisplay}</a></li>
            <li><a href={`https://wa.me/${SITE.whatsapp}`} className="transition hover:text-white">WhatsApp</a></li>
            <li><a href={`mailto:${SITE.email}`} className="break-all transition hover:text-white">{SITE.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-white/45 lg:px-8">© {new Date().getFullYear()} Unilink Courier Solutions (UCS). Bridging The Gaps.</p>
      </div>
    </footer>
  );
}
