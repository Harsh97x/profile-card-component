/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        darkCyan: 'hsl(185, 75%, 39%)',
        veryDarkDesaturatedBlue: 'hsl(229, 23%, 23%)',
        darkGrayishBlue: 'hsl(227, 10%, 46%)',
      },
      backgroundImage: {
        'top-pattern': "url('/images/bg-pattern-top.svg')",
        'bottom-pattern': "url('/images/bg-pattern-bottom.svg')",
      },
    },
  },
  plugins: [],
}
