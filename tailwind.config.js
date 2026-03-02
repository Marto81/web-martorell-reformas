/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7ee',
          100: '#fdecd3',
          200: '#fad5a5',
          300: '#f7b76d',
          400: '#f38e33',
          500: '#f0700b',
          600: '#e15606',
          700: '#bb3f09',
          800: '#95320e',
          900: '#792b0f',
        },
      },
    },
  },
  plugins: [],
};