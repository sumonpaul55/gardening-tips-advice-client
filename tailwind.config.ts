import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--inter)"],
        roboto: ["var(--roboto)"],
        roboto_slab: ["var(--roboto_slab)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "#007525",
        disable: "rgb(156 163 175)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
