/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#021a3e',
      },
      animation: {
        'up-down': 'UpAndDown 8s infinite',
        'up-down-fish': 'UpAndDownFish 8s infinite',
      },
      keyframes: {
        UpAndDown: {
          '0%, 100%': {
            transform: 'translateY(-70%)',
            // animation-timing-function: cubic-bezier(0.8,0,1,1);
          },
          '50%': {
            transform: 'none',
            // animation-timing-function: cubic-bezier(0,0,0.2,1);
          },
        },

        UpAndDownFish: {
          '0%, 100%': {
            transform: 'translateY(-10%)',
            // animation-timing-function: cubic-bezier(0.8,0,1,1);
          },
          '50%': {
            transform: 'none',
            // animation-timing-function: cubic-bezier(0,0,0.2,1);
          },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
