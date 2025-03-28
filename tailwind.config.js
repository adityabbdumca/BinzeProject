/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif']
      },
      spacing: {
        '120px': '120px',
        '140px': '140px',
        '180px': '180px'
      }
    },
  },
  plugins: [],
}


