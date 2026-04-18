/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        onsu: {
          black: '#080808',
          dark: '#111111',
          panel: '#141414',
          border: '#242424',
          chrome: '#B8B8B8',
          gold: '#BFA77A',
          'gold-light': '#D4BC95',
          cream: '#F2EDE4',
          muted: '#6A6A6A',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.3em',
        ultra: '0.5em',
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
      },
    },
  },
  plugins: [],
};
