const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: colors.blue,
      green:colors.green,
      emerald: colors.emerald,
      primary:'#6DC4CC',
      primaryDark :'#2A8992',
      purplegrad : "transparent linear-gradient(221deg,#a656d1,#4222b7)",
      brand: {
        DEFAULT: "#6DC4CC",
        icon: colors.indigo[600],
        button: colors.indigo[600],
        white10: "#FFFFFF1A"
      },
      matteBlack : "#383838"
    },
    boxShadow: {
      'color':"0 20px 40px rgba(109,196,204,.6509803921568628)"
    },
    extend: {
      backgroundImage: theme => ({
       'hero-pattern': "url('/pattern.svg')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
