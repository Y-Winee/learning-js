/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "responsive-demo.html", "./js/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'my-break-point' : '645px',
      }
    },
  },
  plugins: [],
}

