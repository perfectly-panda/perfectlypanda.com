/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './app/*.{html,js}',],
  theme: {
    theme: {
      extend: {
        colors: {
          primary1: '#b12203',
          primary2: '#000000',
          secondary1: "#15616d",
          accent1: "#ffecd1",
          highlight1: "#f7b538",
        },
        fontFamily: {
          sans: ['Montserrat', 'sans-serif'],
          serif: ['Cinzel', 'serif'],
          mono: ['"Ubuntu Mono"', 'monospace'],
          montserrat: ['Montserrat', 'sans-serif'],
        }
      }
    }
  },
  plugins: [],
}

