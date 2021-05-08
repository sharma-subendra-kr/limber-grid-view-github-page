let ORIGIN;

if (process.env.NODE_ENV === "developement") {
	ORIGIN = window.location.origin + "/";
} else {
	ORIGIN = "https://limber.in/";
}

export { ORIGIN };
