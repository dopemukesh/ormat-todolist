/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
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
        gray: {
          50: '#FFFFFF',
          100: '#F4F5F6',
          200: '#E1E1E6',
          300: '#D0D0D6',
          400: '#A9A9B3',
          500: '#686874',
          600: '#41424B',
          700: '#36363E',
          800: '#1F1F26',
          900: '#19191D',
          950: '#131316'
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