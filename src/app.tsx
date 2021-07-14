import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Routes from "./configs/routes/routes";
import { LGVProvider, lgv } from "./common/components/hoc/withLGV";

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
		success: { main: "#388e3c" },
		info: { main: "#1976d2" },
		warning: { main: "#f57c00" },
		error: { main: "#d32f2f" },
	},
});

const App = () => {
	return (
		<div className="app">
			<ThemeProvider theme={theme}>
				<LGVProvider lgv={lgv}>
					<Routes></Routes>
				</LGVProvider>
			</ThemeProvider>
		</div>
	);
};

export default App;
