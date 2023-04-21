/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    typography: (theme) => ({}),
    extend: {},
    fontFamily: {
      'quicksand': ['Quicksand', 'sans-serif']
    },
  },
  plugins: [require("daisyui"),
    require("@tailwindcss/typography")],
}
