export function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

export const hasErrors = (errors) => {
	for (const error in errors) {
		if (errors[error]) {
			return true;
		}
	}
};

export const getFormInput = (inputs) => {
	const data = new FormData();
	for (const key in inputs) {
		data.append(key, inputs[key]);
	}
	return data;
};
