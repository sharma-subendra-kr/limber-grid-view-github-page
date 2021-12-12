const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "production",
	output: {
		path: __dirname + "/dist",
		filename: "index.js",
	},
	externals: [
		{ "@reduxjs/toolkit": "RTK" },
		{ "connected-react-router": "ConnectedReactRouter" },
		{
			lodash: {
				commonjs: "lodash",
				commonjs2: "lodash",
				amd: "lodash",
				root: "_",
			},
		},
		{ "markdown-to-jsx": "MarkdownToJSX" },
		{ react: "React" },
		{ "react-is": "ReactIs" },
		{ "react-dom": "ReactDOM" },
		{ "react-redux": "ReactRedux" },
		{ "react-router-dom": "ReactRouterDOM" },
		{ redux: "Redux" },
		{ "redux-saga": "ReduxSaga" },
		// Sanitize html should be removed from front end
		// { "sanitize-html": "sanitizeHtml" },
		{ "styled-components": "styled" },
	],
});
