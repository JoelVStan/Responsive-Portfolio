/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"]
    },
    extend: {
      colors: {
        "bg-color": "var(--bg-color)",
        "second-bg-color": "var(--secondbg-color)",
        "text-color": "var(--text-color)",
        "main-color": "var(--main-color)",
      }
    },
  },
  plugins: [],
}

