/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "./js/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'my-break-point' : '645px',
      }
    },
  },
  plugins: [],
}

