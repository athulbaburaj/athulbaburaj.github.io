/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ground:    '#0B0B0B',
        surface:   '#131313',
        primary:   '#D8D8D4',
        secondary: '#9A9A95',
        muted:     '#7E7E79',
        faint:     '#55554F',
        accent:    '#8C7CDB',
        hairline:  'rgba(255,255,255,0.07)',
      },
      borderColor: {
        hairline: 'rgba(255,255,255,0.07)',
        edge:     'rgba(255,255,255,0.14)',
      },
      fontFamily: {
        sans: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      fontSize: {
        xs: '0.6875rem', sm: '0.8125rem', base: '0.9375rem', lg: '1.0625rem',
        xl: '1.1875rem', '2xl': '1.375rem', '3xl': '1.625rem', '4xl': '2rem',
        '5xl': '2.5rem', '6xl': '3rem', '7xl': '3.5rem',
      },
    },
  },
  plugins: [],
}