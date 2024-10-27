/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* FONTS GOOGLE FONTS */
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        grechen: ['Grechen Fuemen', 'cursive'],
      }
    },
  },
  plugins: [],
}