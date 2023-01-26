/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['"Poppins"', 'sans-serif'],
      },
      colors: {
        first: '#1d1b31',
        seconds: '#19192e',
        third: '#141430',
        fourth: '#f89f5b',
      },
    },
  },
  plugins: [],
};
