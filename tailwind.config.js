/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:'#3B0B59',
        secondary:'#8b0c5a',
        accent:'#4169e1',
        primarytxt:'#000000',
        background:'#ffffff',
        secondarytxt:'#ffffff',
      }
    },
  },
  plugins: [],
}

