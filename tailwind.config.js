/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#33ffda',
        secondary: '#33f0ff',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      boxShadow: {
        'neu': '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff',
        'neu-hover': '12px 12px 24px #d1d9e6, -12px -12px 24px #ffffff',
        'neu-inset': 'inset 8px 8px 16px #d1d9e6, inset -8px -8px 16px #ffffff',
        'neu-dark': '8px 8px 16px #1a1a1a, -8px -8px 16px #2a2a2a',
        'neu-dark-hover': '12px 12px 24px #1a1a1a, -12px -12px 24px #2a2a2a',
        'neu-dark-inset': 'inset 8px 8px 16px #1a1a1a, inset -8px -8px 16px #2a2a2a',
      },
    },
  },
  plugins: [],
};