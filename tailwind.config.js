/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-black": "#020d13",
        "primary-red": "#FF0000",
        "primary-white": "#FFF",
      },
    },
    fontFamily: {
      display: ["Fjalla One", "sans-serif"],
    },
  },
  plugins: [],
}
