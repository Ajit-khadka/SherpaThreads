/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Sans:['Open Sans', 'sans-serif'],
        Roboto:['Roboto Mono', 'monospace'],
        Inter:['Inter', 'sans-serif']  
      }
    },
  },
  plugins: [],
}