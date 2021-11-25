const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "production",
	output: {
		path: __dirname + "/dist",
		filename:	"index.js",
	},
	externals: {
		"resize-observer-polyfill": {
			commonjs: "resize-observer-polyfill",
			commonjs2: "resize-observer-polyfill",
			amd: "resize-observer-polyfill",
			root: "resize-observer-polyfill",
		},
	},
});
