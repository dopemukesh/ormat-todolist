/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'up-md': '0 -4px 6px rgba(0, 0, 0, 0.1)',
        'up-lg': '0 -10px 15px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        dark: {
          50: '#f4f4f4',
          100: '#d9d9d9',
          200: '#bebebe',
          300: '#a3a3a3',
          400: '#888888',
          500: '#6f6f6f',
          600: '#585858',
          700: '#414141',
          800: '#2a2a2a',
          900: '#141414',
        },
        'purplex': {
          50: '#F3E5FF',    // Lightest shade
          100: '#E1B9FF',
          200: '#D08CFF',
          300: '#BF5FFF',
          400: '#9F33FF',
          500: '#7C1AFF',    // Base color
          600: '#6A17CC',
          700: '#5812A2',
          800: '#460D79',
          900: '#350850',    // Darkest shade
          950: '#230330',    // Very Dark shade
        },
      },
    },
  },
  plugins: [],
}