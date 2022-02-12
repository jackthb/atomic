module.exports = {
  corePlugins: {
    maxWidth: true,
  },
  darkMode: "class",
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    fontFamily: {
      display: ["Libre Baskerville, serif"],
      sans: ["Nunito", "sans-serif"],
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
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
