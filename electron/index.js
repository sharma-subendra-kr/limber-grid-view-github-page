const { app, BrowserWindow, net, protocol } = require("electron");
const path = require("node:path");
const url = require("url");
const fs = require("node:fs");

const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		show: false,
	});
	win.maximize();
	win.show();
	// win.webContents.openDevTools();
	win.loadFile(path.resolve(__dirname, "../src/templates/electron.index.html"));
};

// protocol.registerSchemesAsPrivileged([
// 	{
// 		scheme: "files",
// 		privileges: {
// 			secure: true,
// 			standard: true,
// 			supportFetchAPI: true,
// 		},
// 	},
// ]);

app.whenReady().then(() => {
	createWindow();

	app.on("window-all-closed", () => {
		if (process.platfrom !== "darwin") {
			app.quit();
		}
	});

	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});

	protocol.handle("main", (req) => {
		const { host, pathname } = new URL(req.url);

		let filePath;
		// let contentType;
		if (host === "js") {
			filePath = "../dist/" + pathname;
			// contentType = "application/javascript";
		} else if (host === "css" && pathname.includes(".css")) {
			filePath = "../dist/" + pathname;
			// contentType = "text/css";
		} else {
			filePath = "../public" + pathname;
		}

		try {
			const data = fs.readFileSync(path.resolve(__dirname, filePath));
			return new Response(data);
			// return net.fetch("file://" + path.resolve(__dirname, filePath));
		} catch (error) {
			console.log("error: main", error);
		}
	});

	protocol.handle("assets", (req) => {
		const { pathname } = new URL(req.url);

		const filePath = "../public/" + pathname;

		try {
			const data = fs.readFileSync(path.resolve(__dirname, filePath));
			return new Response(data);
		} catch (error) {
			console.log("error: assets", error);
		}
	});

	protocol.handle("file", (req) => {
		const { pathname } = new URL(req.url);

		if (pathname.includes("LimberGridView")) {
			try {
				const data = fs.readFileSync(
					path.resolve(__dirname, "../src/templates/electron.index.html")
				);
				return new Response(data);
			} catch (error) {
				console.log("error: file", error);
			}
		}

		try {
			const data = fs.readFileSync(pathname);
			return new Response(data, {});
		} catch (error) {
			console.log("error: file", error);
		}
	});

	protocol.handle("https", (req) => {
		const { pathname } = new URL(req.url);

		let dirname = __dirname.split("/");
		dirname.length = dirname.length - 1;
		dirname = dirname.join("/");

		try {
			const data = fs.readFileSync(path.resolve(dirname, "public" + pathname));
			return new Response(data);
		} catch (error) {
			console.log("error: https", error);
		}
	});
});
