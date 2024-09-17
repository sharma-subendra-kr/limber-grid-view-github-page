const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "production",
	output: {
		path: __dirname + "/dist",
		filename: "electron.index.js",
	},
});
