/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellowSoft: "#ffe66d",
        redCoral: "#ff6b6b",
        turquoise: "#4ecdc4",
        offWhite: "#f7fff7",
        tealDark: "#1a535c",
      },
    },
  },
  plugins: [],
}
