"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { NAV } from "@/lib/site";
import { useDemo } from "./DemoModal";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const { open } = useDemo();
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header id="top" className={`sticky top-0 z-50 transition ${scrolled ? "border-b border-slate-200/70 bg-white/85 backdrop-blur-lg" : "bg-white"}`}>
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-[15px] font-semibold text-navy/75 transition hover:text-brand">{n.label}</a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <button onClick={() => open("Request Access")} className="rounded-lg px-4 py-2.5 text-[15px] font-semibold text-navy transition hover:bg-mist">Request Access</button>
          <button onClick={() => open("Book A Demo")} className="rounded-lg bg-ucsred px-5 py-2.5 text-[15px] font-semibold text-white transition hover:bg-ucsred-dark">Book A Demo</button>
        </div>
        <button className="rounded-md p-2 lg:hidden" aria-label="Menu" aria-expanded={menu} onClick={() => setMenu(!menu)}>
          {menu ? <X /> : <Menu />}
        </button>
      </div>
      {menu && (
        <div className="border-t border-slate-200 bg-white px-5 pb-5 lg:hidden">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setMenu(false)} className="block py-3 text-base font-semibold">{n.label}</a>
          ))}
          <div className="mt-3 flex gap-3">
            <button onClick={() => { setMenu(false); open("Request Access"); }} className="flex-1 rounded-lg border border-slate-300 py-3 font-semibold">Request Access</button>
            <button onClick={() => { setMenu(false); open("Book A Demo"); }} className="flex-1 rounded-lg bg-ucsred py-3 font-semibold text-white">Book A Demo</button>
          </div>
        </div>
      )}
    </header>
  );
}
