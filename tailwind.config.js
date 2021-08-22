module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        18: "4.5rem",
      },
      colors: {
        "interactive-normal": "#b9bbbe",
        "interactive-hover": "#dcddde",
      },
      backgroundColor: {
        tertiary: "#202225",
        secondary: "#2f3136",
        primary: "#36393f",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
