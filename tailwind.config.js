module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        13: "3.25rem",
        18: "4.5rem",
        55: "13.75rem",
      },
      colors: {
        "interactive-normal": "#b9bbbe",
        "interactive-hover": "#dcddde",
        muted: "#72767d",
        "header-primary": "#fff",
        "header-secondary": "#b9bbbe",
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
