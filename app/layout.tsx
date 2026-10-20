import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { DemoProvider } from "@/components/DemoModal";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: `${SITE.name} (${SITE.short}) | ${SITE.tagline}`,
  description:
    "Unilink Courier Solutions is a managed courier aggregation and e-commerce logistics company in Pakistan. One coordinated framework for courier allocation, shipment monitoring, returns and COD reconciliation.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <DemoProvider>{children}</DemoProvider>
      </body>
    </html>
  );
}
