// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.tealDark"),
            a: {
              color: theme("colors.redCoral"),
              textDecoration: "none",
            },
            h1: { color: theme("colors.tealDark") },
            h2: { color: theme("colors.tealDark") },
            "blockquote p": { color: theme("colors.tealDark") },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
