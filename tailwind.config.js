/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'obsidian': '#050505',
        'ghost-white': '#EBE4F2',
        'electric-violet': '#8B5CF6',
        'subtle-gray': '#1A1A1A',
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        display: ['"Inter"', 'sans-serif'], // Display is now just bold Inter
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '3rem',
        '5xl': '4.5rem',
        '6xl': '6rem',
        '7xl': '8rem', // Massive headers
      },
      backgroundImage: {
        // Minimalist grid, very subtle
        'grid-pattern': "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-pattern': '80px 80px', // Larger grid for architectural feel
      },
    },
  },
  plugins: [],
}