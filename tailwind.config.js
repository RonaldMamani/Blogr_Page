/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'large': '4.5rem'
      },
      fontSize: {
        '4.5xl': '2.5rem'
      }
    },
  },
  plugins: [],
}

