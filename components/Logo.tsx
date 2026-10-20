import Image from "next/image";
import { SITE } from "@/lib/site";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex flex-col items-start leading-none" aria-label={`${SITE.name} home`}>
      <Image src={light ? "/logo-light.png" : "/logo.png"} alt={SITE.name} width={1200} height={408} priority
        className="h-11 w-auto sm:h-12" />
      <span className={`mt-1 pl-1 text-[11px] font-semibold tracking-[0.22em] ${light ? "text-white/70" : "text-slate2"}`}>
        {SITE.tagline}
      </span>
    </a>
  );
}
