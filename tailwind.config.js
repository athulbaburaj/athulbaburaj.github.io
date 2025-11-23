/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ops-green': {
          DEFAULT: '#00e5ff', // Electric Cyan
          dim: '#008f99',
          glow: '#00e5ff',
          dark: '#05080f', // Deep Blue-Gray
          light: '#e5ffff', // Very light cyan for text
        },
        'ops-black': '#05080f', // Deep Blue-Gray
        'ops-gray': '#0a1120', // Slightly lighter blue-gray for cards
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