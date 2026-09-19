import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#EBF1F5",
          100: "#D9E3EA",
          300: "#9BA9B4",
          500: "#707D86",
          700: "#33363A",
          800: "#151B20",
          900: "#0B1114",
          950: "#07090B",
        },
        teal: {
          300: "#5EC8E0",
          400: "#2BA2C2",
          500: "#0A7676",
          700: "#073644",
          800: "#052830",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(43, 162, 194, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
