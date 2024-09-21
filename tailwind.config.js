/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige-book-rec': '#EADFB4',
        'grey-book-rec': '#9BB0C1',
        'green-book-rec': '#51829B',
        'orange-book-rec': '#F6995C'
      },
      spacing: {
        '42': '10.5rem',
      }
    },
  },
  plugins: [],
}