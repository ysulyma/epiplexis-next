import { config as dotenvConfig } from "dotenv";
import type { Config } from "tailwindcss";

dotenvConfig();

const config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: ["class"],
  plugins: [require("tailwindcss-animate")],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        grid: `url("${process.env.NEXT_PUBLIC_ROOT}/grid.png")`,
      },
      fontFamily: {
        cm: ["KaTeX_Main", "Times New Roman", "serif"],
        "cm-mono": ["KaTeX_Typewriter", "monospace"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
} satisfies Config;

export default config;
