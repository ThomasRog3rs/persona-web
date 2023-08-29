/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js.ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7c3aed',
        'primary-light': '#8b5cf6',
      },
    },
  },
  plugins: [],
};
