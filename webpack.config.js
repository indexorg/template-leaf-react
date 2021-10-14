const path = require("path")

module.exports = {
	mode: "development",
	entry: {
		build: path.resolve(__dirname, "./src/index.js"),
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "[name].js",
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env"],
						},
					},
				],
			},
		],
	},
	resolve: {
		alias: {
            '@components': path.resolve(__dirname, "./src/components/"),
            '@views': path.resolve(__dirname, "./src/views/"),
            '@utils': path.resolve(__dirname, "./src/utils/"),
		},
	},
}
