module.exports = {
	entry: "./js/main.js",
	output: {
		path: "./dist",
		filename: "main.js"
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css"}
		]
	}
};