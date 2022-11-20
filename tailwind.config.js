/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
      fontFamily: {
        'header': ['Poppins', 'ui-sans-serif'],
      },
      container: {
        center: true,
      },
    },
    corePlugins: {
      container: false
    },
    plugins: [
      function ({ addComponents }) {
        addComponents({
          '.container': {
            maxWidth: '100%',
            '@screen sm': {
              maxWidth: '640px',
            },
            '@screen md': {
              maxWidth: '768px',
            },
            '@screen lg': {
              maxWidth: '1280px',
            },
          }
        })
      }
    ]
  }