/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'introDesk': 'url(./src/assets/bg-pattern-intro-desktop.svg)',
        'introMob': 'url(./src/assets/bg-pattern-intro-mobile.svg)',
        'iluEditorDesk': 'url(./src/assets/illustration-editor-desktop.svg)',
        'iluEditorMob': 'url(./src/assets/illustration-editor-mobile.svg)',
        'iluLaptopDesk': 'url(./src/assets/illustration-laptop-desktop.svg)',
        'iluLaptopMob': 'url(./src/assets/illustration-laptop-mobile.svg)',
        'iluPhone': 'url(./src/assets/illustration-phones.svg)',
      },
      borderRadius: {
        'large': '4.5rem'
      }
    },
  },
  plugins: [],
}

