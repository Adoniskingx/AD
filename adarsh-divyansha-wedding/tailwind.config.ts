import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: "#FFF9EF",
          100: "#F8F0E3",
        },
        maroon: {
          700: "#6E1F2E",
          950: "#42131E",
        },
        gold: "#B5965A",
        brown: "#291C1A",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['Inter', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        editorial: "0.18em",
      },
      boxShadow: {
        soft: "0 24px 70px rgba(66, 19, 30, 0.10)",
      },
    },
  },
  plugins: [],
} satisfies Config;