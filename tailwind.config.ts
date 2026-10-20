import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#021837", 900: "#021837", 800: "#0A2A52" },
        brand: { DEFAULT: "#0A4D9D", soft: "#E8F0FA" },
        ucsred: { DEFAULT: "#E70208", dark: "#B80106" },
        slate2: "#5B6B80",
        mist: "#F4F6FA",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        panel: "0 1px 2px rgba(2,24,55,.06), 0 24px 60px -24px rgba(2,24,55,.28)",
      },
    },
  },
  plugins: [],
};
export default config;
