// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // ADD THIS WHOLE SECTION FOR THE CLOUD ANIMATIONS
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