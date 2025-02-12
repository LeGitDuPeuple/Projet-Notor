// tailwind.config.js

module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          title: ['Inter', 'sans-serif'],  
        },
        colors: {
            'ma-couleur': '#222222',  
          },
      },
    },
    plugins: [],
  }
  