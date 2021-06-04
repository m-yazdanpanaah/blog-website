const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js', './lib/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ["'Spartan'", ...fontFamily.sans],
      },
      colors: {
        blue: colors.lightBlue,
        night: '#0B0C10',
        evening: '#fff',
        drapes: '#2E3D4F',
        moonlight: '#fff',
        teeth: '#243141',
        ocean: '#2E3D4F',
        giant: '#FC0E49',
        blood: '#D10337',
        hearth: '#FF3A6B',
        white: '#fff',
        code: {
          green: '#b5f4a5',
          yellow: '#ffe484',
          purple: '#d9a9ff',
          red: '#ff8383',
          blue: '#FF3A6B',
          white: '#fff',
        },
      },
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
