/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        'open-sans': ['OpenSans','sans-serif'],
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

