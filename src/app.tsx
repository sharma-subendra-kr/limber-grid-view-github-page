import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Routes from "./configs/routes/routes";

const theme = createMuiTheme({
	palette: {
		primary: {
			// light: "#4dabf5",
			// main: "#2196f3",
			// dark: "#1769aa",
			// contrastText: "#fff",
			main: "#1769aa",
		},
		secondary: {
			// light: "#f73378",
			// main: "#f50057",
			// dark: "#ab003c",
			// contrastText: "#000",
			main: "#ab003c",
		},
	},
});

const App = () => {
	return (
		<div className="app">
			<ThemeProvider theme={theme}>
				<Routes></Routes>
			</ThemeProvider>
		</div>
	);
};

export default App;
