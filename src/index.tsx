import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./configs/config";

import App from "./app";

import "./index.css";
import "./index.scss";

const Root = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

ReactDOM.render(<Root />, document.getElementById("root"));
