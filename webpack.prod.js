const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

function externalForMaterialUi({ context, request }, callback) {
	if (/@material-ui.+/.test(request)) {
		const name = request.replace(/^.*[\\\/]/, "");
		return callback(null, "root MaterialUI." + name);
	}
	callback();
}

module.exports = merge(common, {
	mode: "production",
	output: {
		path: __dirname + "/dist",
		filename: "index.js",
	},
	externals: [
		// "@fortawesome",
		"/@material-ui/core/.*/",
		// "/@material-ui/icons/.*/",
		// "/@material-ui/lab/.*/",
		// externalForMaterialUi,
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
		// { recharts: "Recharts" },
		{ redux: "Redux" },
		{ "redux-saga": "ReduxSaga" },
		// Sanitize html should be removed from front end
		// { "sanitize-html": "sanitizeHtml" },
		{ "styled-components": "styled" },
	],
});
