/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        night: "#0A2540",
        ice: "#E6F0FF",
        holly: "#2ECC71",
        candy: "#FF4D4D"
      },
      fontSize: {
        base: "18px"
      },
      boxShadow: {
        cozy: "0 10px 30px rgba(0,0,0,0.2)"
      },
      borderRadius: {
        '2xl': '1rem'
      }
    },
  },
  plugins: [],
}
