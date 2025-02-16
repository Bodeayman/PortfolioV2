/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f7f7f8',
          100: '#ececf1',
          200: '#d9d9e3',
          300: '#c5c5d2',
          400: '#a0a0b4',
          500: '#71718a',
          600: '#4b4b63',
          700: '#3c3c4f',
          800: '#2d2d3d',
          900: '#1f1f2b',
          950: '#0f0f17',
        },
      },
    },
  },
  plugins: [],
};