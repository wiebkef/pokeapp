/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "var(--bg-color)",
        "font-color": "var(--font-color)",
        "sec-color": "var(--sec-color)",
        "th-color": "var(--th-color)"
      }
    },
  },
  plugins: [],
};
