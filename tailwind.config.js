module.exports = {
  corePlugins: {
    maxWidth: true,
  },
  darkMode: "class",
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    fontFamily: {
      heading: ["var(--font-made-dillan)"],
      subheading: ["var(--font-space-text)"],
    },
    extend: {
      height: {
        header: "7rem",
        body: "968px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
