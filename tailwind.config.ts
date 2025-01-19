import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#a172fd",
          secondary: "#a06cd5",
          accent: "#b185db",
        },

        text: {
          primary: "#212529",
          secondary: "#545F66",
          tertiary: "#8d99ae",
          muted: "#adb5bd",
        },

        background: {
          light: "#ffffff",
          muted: "#f5f5f5",
          accent: "#b185db",
        },
      },

      fontFamily: {
        main: ["var(--font-playfair)", ...fontFamily.sans],
        secondary: ["var(--font-nunito)", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
} satisfies Config;
