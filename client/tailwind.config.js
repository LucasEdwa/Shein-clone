/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'bottom': '0 4px 2px -2px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        spinUp: {
          '0%': { transform: 'rotate(0) translateY(0)' },
          '100%': { transform: 'rotate(180deg) translateY(0)' },
        },
      },
      animation: {
        spinUp: 'spinUp 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',  /* Firefox */
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          'display': 'none',  /* Chrome, Safari, and Opera */
        },
      });
    },
  ],
}

