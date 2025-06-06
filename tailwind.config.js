const defaultTheme = require('tailwindcss/defaultTheme'); // Import the default theme

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Set 'Inter' as the default font family
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      // Your keyframes for animations are still here
      keyframes: {
      swirl: {
        '0%': { transform: 'translate(0, 0) rotate(0deg) scale(1.2)' },
        '25%': { transform: 'translate(20px, -40px) rotate(30deg) scale(1.1)' },
        '50%': { transform: 'translate(-30px, 20px) rotate(-10deg) scale(1.3)' },
        '75%': { transform: 'translate(10px, 40px) rotate(20deg) scale(1.2)' },
        '100%': { transform: 'translate(0, 0) rotate(0deg) scale(1.2)' },
      },
       },
      animation: {
      swirl: 'swirl 25s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}