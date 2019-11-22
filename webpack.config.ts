import * as path from "path"
import * as HtmlWebpackPlugin from "html-webpack-plugin"
import * as HtmlWebpackInlineSourcePlugin from "html-webpack-inline-source-plugin"
import { Configuration } from "webpack"

const config: Configuration = {
	entry: "./src/index.tsx",
	resolve: {
		extensions: [".js", ".ts", ".tsx"],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "awesome-typescript-loader",
					},
				],
			},
		],
	},
	cache: true,
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].js",
	},
	plugins: [
		// Inject JS inline into index.html.
		new HtmlWebpackPlugin({
			inlineSource: ".(js|css)$",
			template: path.join(__dirname, "src/index.html"),
		}),
		new HtmlWebpackInlineSourcePlugin(),
	],
}

// Dev server configs aren't typed properly.
Object.assign(config, {
	devServer: {
		publicPath: "/",
		historyApiFallback: true,
	},
})

export default config
