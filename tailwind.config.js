/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cave': "url('./src/assets/image/cave_backgound.jpg')",
      },
      fontfamily: {
        'poppins': "Poppins, sans-serif"
      }
    }
  },
  plugins: [],
}

