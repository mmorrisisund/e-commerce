const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      '2xs': '320px',
      xs: '480px',
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        hero: 'url("./assets/images/banner.png")',
      },
      fontFamily: {
        pacifico: 'Pacifico',
        sans: 'Recursive ' + defaultTheme.fontFamily.sans,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
