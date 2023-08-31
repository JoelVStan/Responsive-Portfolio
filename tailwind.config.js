/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"]
    },
    screens: {
      'xl': {'max': '1200px'},
      'lg': {'max': '991px'},
      'md': {'max': '768px'},
      'sm': {'max': '617px'},
      'xs': {'max': '450px'},
    },
    extend: {
      colors: {
        "bg-color": "var(--bg-color)",
        "second-bg-color": "var(--second-bg-color)",
        "text-color": "var(--text-color)",
        "main-color": "var(--main-color)",
      },
      keyframes: {
        floatImage: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        }
      },
      animation: {
        floatImage: 'floatImage 2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

