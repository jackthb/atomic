module.exports = {
	corePlugins: {
		// ...
		maxWidth: true,
	},
	purge: ["./pages/**/*.js", "./components/**/*.js"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			display: ["Montserrat"],
			sans: ["Lato", "sans-serif"],
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
