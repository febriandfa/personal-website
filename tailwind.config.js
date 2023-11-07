/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#BFBEB8",
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        dmmono: ["DM Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
