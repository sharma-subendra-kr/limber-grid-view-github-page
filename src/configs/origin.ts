let ORIGIN;
const protocol = "http";
const PORT = 5001;

if (process.env.NODE_ENV === "development") {
	ORIGIN = protocol + "://" + window.location.hostname + ":" + PORT + "/";
} else {
	ORIGIN = "https://limber.in/";
}

export { ORIGIN };