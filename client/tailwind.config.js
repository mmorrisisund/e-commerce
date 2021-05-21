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
      colors: {
        glass: 'rgba(255,255,255,.35)',
      },

      fontFamily: {
        pacifico: 'Pacifico',
        sans: 'Recursive ' + defaultTheme.fontFamily.sans,
      },
      inset: {
        badge: 'calc(50% - 48px)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
