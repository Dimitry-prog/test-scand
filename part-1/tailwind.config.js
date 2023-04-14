/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: 'Manrope',
        'open-sans': 'OpenSans',
      },
      colors: {
        'dark-blue': {
          DEFAULT: '#0A2640',
        },
        gray: {
          DEFAULT: '#777777',
        },
        green: {
          DEFAULT: '#65E4A3',
        }
      },
    },
  },
  plugins: [],
}

