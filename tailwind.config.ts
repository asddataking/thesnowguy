import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        snow: {
          ice: "var(--snow-ice)",
          navy: "var(--snow-navy)",
          white: "var(--snow-white)",
          gray: "var(--snow-gray)",
          bg: "var(--snow-bg)",
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #e8eaed 0%, #f0f4f8 50%, #e8eaed 100%)',
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "Impact", "sans-serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      spacing: {
        "12": "3rem",
        "16": "4rem",
      },
    },
  },
  plugins: [],
};

export default config;

