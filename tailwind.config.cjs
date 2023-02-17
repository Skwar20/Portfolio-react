/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['"Poppins"', 'sans-serif'],
      },
      colors: {
        first: '#141414',
        second: '#111010',
        third: '#0f0e0e',
        fourth: '#f89f5b',
      },
    },
  },
  plugins: [],
};
