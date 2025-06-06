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
        'move-cloud-1': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'move-cloud-2': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-120%)' },
        }
      },
      animation: {
        'move-cloud-1': 'move-cloud-1 55s linear infinite',
        'move-cloud-2': 'move-cloud-2 70s linear infinite',
      }
    },
  },
  plugins: [],
}