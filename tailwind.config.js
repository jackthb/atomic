module.exports = {
  corePlugins: {
    maxWidth: true,
  },
  content: ["./pages/**/*.js", "./components/**/*.js"],
  plugins: [require("@tailwindcss/typography")],
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
};
