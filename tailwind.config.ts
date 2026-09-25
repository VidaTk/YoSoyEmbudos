import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tema oscuro: Webinar y Diagnóstico.
        ink: {
          DEFAULT: "#0b0b0d",
          light: "#161618",
          lighter: "#232326",
        },
        gold: {
          DEFAULT: "#e8bd3c",
          light: "#f2d375",
          dark: "#c79a24",
        },
        // Tema claro: Bootcamp e Inicio.
        paper: {
          DEFAULT: "#ffffff",
          soft: "#faf8f3",
        },
        graphite: {
          DEFAULT: "#1a1a1a",
          soft: "#4a4a4a",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        serif: ["var(--font-lora)", "Georgia", "serif"],
      },
      animation: {
        "fade-in": "fade-in 0.35s ease-out forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
