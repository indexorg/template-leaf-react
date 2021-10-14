const path = require("path")
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
	mode: "production",
	entry: {
		build: path.resolve(__dirname, "./src/index.js"),
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "[name].js",
	},
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
    plugins: [
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                terserOptions: {
                    warnings: false,
                    keep_fnames: true,
                }
            })
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
