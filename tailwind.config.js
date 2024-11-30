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
    },
  },
  plugins: [],
}