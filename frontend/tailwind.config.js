/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: '#22d3ee',
      },
      boxShadow: {
        glow: '0 0 30px rgba(34, 211, 238, 0.45)',
      },
    },
  },
  plugins: [],
};
