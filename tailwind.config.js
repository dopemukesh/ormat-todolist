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
        'gray': {
          50: '#FFFFFF',
          100: '#F6F7F9',
          200: '#EEEEF0',
          300: '#D9DADE',
          400: '#AEAEB1',
          500: '#88898B',
          600: '#5F5F60',
          700: '#43434A',
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
        'blue': {
          400: '#4A90FF',    // Lightest shade
          500: '#045FFB',    // Base color
        },
        'orange': {
          400: '#F55734',    // Lightest shade
          500: '#EB340C',    // Base color
        },
      },
    },
  },
  plugins: [],
}