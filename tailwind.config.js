/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Peyda"],
      },
      screens: {
        xs: "390px",
        sm: "481px",
      },
    },
  },
  plugins: [],
};
