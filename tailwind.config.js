/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","index.js"],
  theme: {
    extend: {

      backgroundImage: theme => ({
        'behind-pattern': "url('../dist/img/fullScreen.jpg')",
       })


    },
  },
  plugins: [],
}
