/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f8fafc', // Light Slate
        surface: '#ffffff',    // White
        primary: '#6366f1',    // Indigo 500
        primaryHover: '#4f46e5', // Indigo 600
        secondary: '#64748b',  // Slate 500
        light: '#0f172a',      // Slate 900 (Text color for light mode)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}