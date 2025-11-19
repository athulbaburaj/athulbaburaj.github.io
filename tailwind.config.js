const defaultTheme = require('tailwindcss/defaultTheme');

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
      
      // Your keyframes for animations
      keyframes: {
      drift: {
        '0%': { transform: 'translate(-20%, 20%) rotate(0deg)' },
        '25%': { transform: 'translate(30%, -30%) rotate(90deg)' },
        '50%': { transform: 'translate(80%, -10%) rotate(180deg)' },
        '75%': { transform: 'translate(20%, 40%) rotate(270deg)' },
        '100%': { transform: 'translate(-20%, 20%) rotate(360deg)' },
      },
    },
    animation: {
      drift: 'drift 40s ease-in-out infinite',
    }

    },
  },
  plugins: [],
}