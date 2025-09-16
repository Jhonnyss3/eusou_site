
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          sage: '#97b9a8',
          terracotta: '#d6865b',
          peach: '#f0af8f',
        },
        fontFamily: {
          'playfair': ['Playfair Display', 'serif'],
          'inter': ['Inter', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }
