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
        Bebas: ['Bebas Neue', "sans-serif"],
        Russo: ["Russo one", "sans-serif"],
      },
      colors: {
        "green": "#2cff2599",
      },
    },
  },
}
