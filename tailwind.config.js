/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ops-green': {
          DEFAULT: '#00ff41', // Classic terminal green - keeping for accents
          dim: '#008f11',
          glow: '#00ff41',
          dark: '#0a0a0a', // Darker, cleaner black
          light: '#e5ffe5', // Very light green for text
        },
        'ops-black': '#050505', // Deep black
        'ops-gray': '#121212', // Slightly lighter black for cards
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'], // Clean sans-serif for body
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'], // Sharp mono for code/accents
        display: ['"Share Tech Mono"', 'monospace'], // Tech font ONLY for headers
      },
      fontSize: {
        'xs': '0.875rem',   // 14px
        'sm': '1rem',       // 16px
        'base': '1.125rem', // 18px
        'lg': '1.25rem',    // 20px
        'xl': '1.5rem',     // 24px
        '2xl': '1.875rem',  // 30px
        '3xl': '2.25rem',   // 36px
        '4xl': '3rem',      // 48px
        '5xl': '3.75rem',   // 60px
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-pattern': '40px 40px',
      },
    },
  },
  plugins: [],
}