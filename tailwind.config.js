/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        "park":["Parkinsans", "sans-serif"],
      },
      colors:{
        'coffee-nav':'#000E14',
        'coffee-footer':'#002B3D'
      },
    },
  },
  plugins: [],
}

