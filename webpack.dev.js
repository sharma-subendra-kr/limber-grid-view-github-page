const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	optimization: {
		minimize: false,
	},
	output: {
		path: path.resolve(__dirname, "public/assets"),
		filename: "index.js",
	},
});
