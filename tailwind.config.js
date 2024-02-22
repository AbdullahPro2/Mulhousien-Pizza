/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },

    extend: {
      height: {
        screen: '100dvh',
      },
      screens: {
        xs: '380px',
      },
      keyframes: {
        rot: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        animation: {
          rotation: 'rot 0.5s linear infinite',
        },
      },
    },
  },
  plugins: [],
};
