const fs = require("fs");
const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const miniCssExtractPlugin = new MiniCssExtractPlugin({
	filename: "index.css",
});
const WebpackNotifierPlugin = require("webpack-notifier");
const webpackNotifierPlugin = new WebpackNotifierPlugin({
	title: "Github Page",
	alwaysNotify: true,
});

const CleanTerminalPlugin = require("clean-terminal-webpack-plugin");
const cleanTerminalPlugin = new CleanTerminalPlugin();

module.exports = {
	mode: process.env.NODE_ENV === "development" ? "development" : "production",
	devtool:
		process.env.NODE_ENV === "development" ? "inline-source-map" : "none",
	entry: __dirname + "/src/index.ts",
	output: {
		path:
			process.env.NODE_ENV === "development"
				? __dirname + "/public/assets"
				: __dirname + "/dist",
		publicPath: "assets",
		filename: "index.js",
	},
	devServer: {
		inline: true,
		contentBase: "./public",
		port: process.env.PORT,
		host: "0.0.0.0",
		historyApiFallback: true,
	},
	module: {
		rules: [
			{ test: /\.tsx?$/, exclude: /node_modules/, loader: "ts-loader" },
			{ test: /\.js$/, exclude: /node_modules/, loader: "source-map-loader" },
			// {
			//   test: /\.js$/,
			//   exclude: /node_modules/,
			//   use: "babel-loader",
			// },
			{
				test: /\.json$/,
				exclude: /node_modules/,
				loader: "json-loader",
			},
			{
				test: /\.(sc|c)ss$/,
				exclude: /node_modules/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: process.env.NODE_ENV === "development",
							reloadAll: true,
						},
					},
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],
			},
		],
	},
	plugins: [miniCssExtractPlugin, webpackNotifierPlugin, cleanTerminalPlugin],
	resolve: {
		extensions: [".tsx", ".ts", ".js", "jsx"],
		alias: {
			src: path.resolve(__dirname, "src/"),
		},
	},
};
