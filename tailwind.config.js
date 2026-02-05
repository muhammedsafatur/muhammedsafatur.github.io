/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1c1004', // Deep Amber / Dark Coffee
        surface: '#2a1b0a',    // Lighter Dark Amber
        primary: '#d97706',    // Amber 600
        primaryHover: '#fbbf24', // Amber 400
        secondary: '#a8a29e',  // Stone 400
        light: '#f5f5f4',      // Stone 100
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}