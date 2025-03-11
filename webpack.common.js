const fs = require("fs");
const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const miniCssExtractPlugin = new MiniCssExtractPlugin({
	filename: "index.css",
});

const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPluginLimberIn = new HtmlWebpackPlugin({
	filename: "limber.index.html",
	template: "./src/templates/limber.index.html",
	inject: false,
});
const htmlWebpackPluginGhPage = new HtmlWebpackPlugin({
	filename: "gh-page.index.html",
	template: "./src/templates/gh-page.index.html",
	inject: false,
});

const WebpackNotifierPlugin = require("webpack-notifier");
const webpackNotifierPlugin = new WebpackNotifierPlugin({
	title: "Github Page",
	alwaysNotify: true,
});

const Webpack = require("webpack");
const webpackBannerPlugin = new Webpack.BannerPlugin({
	banner: fs.readFileSync("./license_header", "utf8"),
	raw: true,
});

const CleanTerminalPlugin = require("clean-terminal-webpack-plugin");
const cleanTerminalPlugin = new CleanTerminalPlugin();

module.exports = {
	entry: path.resolve(__dirname, "src/index.tsx"),
	optimization: {
		minimize: process.env.MINIMIZE === "true",
	},
	output: {
		publicPath: "/assets",
	},
	devServer: {
		inline: true,
		contentBase: path.resolve(__dirname, "public"),
		port: process.env.PORT,
		host: "0.0.0.0",
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: "ts-loader",
				options: {
					transpileOnly: true,
				},
			},
			{
				test: /\.js$/,
				enforce: "pre",
				exclude: /node_modules/,
				loader: "source-map-loader",
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
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
						options: {},
					},
					{
						loader: "css-loader",
						options: {
							url: false,
						},
					},
					"postcss-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(txt|md)$/i,
				use: "raw-loader",
			},
		],
	},
	plugins: [
		miniCssExtractPlugin,
		webpackNotifierPlugin,
		webpackBannerPlugin,
		cleanTerminalPlugin,
		htmlWebpackPluginLimberIn,
		htmlWebpackPluginGhPage,
	],
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".jsx"],
		alias: {
			src: path.resolve(__dirname, "src/"),
			"@src": path.resolve(__dirname, "src/"),
		},
	},
};
