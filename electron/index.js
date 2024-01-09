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
	win.loadFile("../src/templates/electron.index.html");
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
		} else if (host === "css") {
			filePath = "../dist/" + pathname;
			// contentType = "text/css";
		}

		const data = fs.readFileSync(path.resolve(__dirname, filePath));
		return new Response(data);
		// return net.fetch("file://" + path.resolve(__dirname, filePath));
	});

	protocol.handle("assets", (req) => {
		const { pathname } = new URL(req.url);

		const filePath = "../public/" + pathname;

		const data = fs.readFileSync(path.resolve(__dirname, filePath));
		return new Response(data);
	});

	protocol.handle("file", (req) => {
		const { pathname } = new URL(req.url);

		if (pathname.includes("LimberGridView")) {
			const data = fs.readFileSync(
				path.resolve(__dirname, "../src/templates/electron.index.html")
			);
			return new Response(data);
		}

		const data = fs.readFileSync(pathname);
		return new Response(data, {});
	});

	protocol.handle("https", (req) => {
		const { pathname } = new URL(req.url);

		let dirname = __dirname.split("/");
		dirname.length = dirname.length - 1;
		dirname = dirname.join("/");

		const data = fs.readFileSync(path.resolve(dirname, "public" + pathname));
		return new Response(data);
	});
});
