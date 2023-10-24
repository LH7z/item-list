const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  theme:  {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Gabarito: ["Gabarito", "cursive"],
      },
      colors: {
        "green": "#2cff2599",
      },
    },
  },
}
