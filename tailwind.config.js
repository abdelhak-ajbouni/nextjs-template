/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    require("flowbite/plugin"),
    require('@tailwindcss/forms'),
    function ({ addComponents }) {
      addComponents({
        '.container-fluid': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '100%',
          },
          '@screen md': {
            maxWidth: '100%',
          },
          '@screen lg': {
            maxWidth: '100%',
          },
          '@screen xl': {
            maxWidth: '2560px',
          },
        }
      })
    }
  ],
};
