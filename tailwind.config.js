/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize:{
        sm:["14px"]
      },
      colors:{
        starbucksgreen:'#007042',
        starGreen: '#D4E9E2',
        lipstickpink: '#fa91aa',
        lightText:"rgba(0,0,0,.58)",
        titleText:"rgba(0,0,0,.87)",
      },
      fontWeight: {
        hairline: 100,
        'extra-light': 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        'extra-bold': 800,
        black: 900,
      }

    },
  },
  plugins: [],
}