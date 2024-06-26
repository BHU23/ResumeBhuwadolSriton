/** @type {import('tailwindcss').Config} */

export default {

  content: [

    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        b1: 'var(--b1-color)',
        b2: 'var(--b2-color)',
        b3: 'var(--b3-color)',
        b4: 'var(--b4-color)',
        b5: 'var(--b5-color)',
        b6: 'var(--b6-color)',
        dark: 'var(--dark-color)',
        white: 'var(--white-color)',
        gray: 'var(--gray-color)',
      },
      textShadow: {
        'custom': '0 4px 4px rgba(0, 0, 0, 0.25)',
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '1px var(--b1-color)',
        },
        '.text-stroke2': {
          '-webkit-text-stroke': '1px var(--b4-color)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],

}
