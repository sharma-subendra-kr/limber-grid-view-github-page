import { validateEmail } from "src/common/utils/utils";

export const getAllErrors = (inputs, errors) => {
	let result = checkEmail("email", inputs.email);
	inputs.email = result.value;
	errors.email = result.error;
	result = checkFirstName("firstName", inputs.firstName);
	inputs.firstName = result.value;
	errors.firstName = result.error;
	result = checkLastName("lastName", inputs.lastName);
	inputs.lastName = result.value;
	errors.lastName = result.error;
	result = checkQuery("query", inputs.query);
	inputs.query = result.value;
	errors.query = result.error;

	return { inputs, errors };
};

export const getErrors = (name, value, inputs, errors) => {
	let result;
	switch (name) {
		case "email":
			result = checkEmail(name, value);
			inputs[name] = result.value;
			errors[name] = result.error;
			break;
		case "firstName":
			result = checkFirstName(name, value);
			inputs[name] = result.value;
			errors[name] = result.error;
			break;
		case "lastName":
			result = checkLastName(name, value);
			inputs[name] = result.value;
			errors[name] = result.error;
			break;
		case "query":
			result = checkQuery(name, value);
			inputs[name] = result.value;
			errors[name] = result.error;
			break;
		default:
			break;
	}
	return { inputs, errors };
};

const regExp = new RegExp("[0-9a-zA-Z]+");

const checkEmail = (key, value) => {
	if (validateEmail(value) && value.length <= 200) {
		return { value, error: "" };
	}
	return { value, error: "Please enter a valid email!" };
};

const checkFirstName = (key, value) => {
	if (regExp.test(value) && value.length <= 200) {
		return { value, error: "" };
	}
	return {
		value,
		error:
			"Please enter a valid first name, first name can't be more than 200 characters!",
	};
};

const checkLastName = (key, value) => {
	if ((regExp.test(value) && value.length <= 200) || value.length === 0) {
		return { value, error: "" };
	}
	return {
		value,
		error:
			"Please enter a valid first name, first name can't be more than 200 characters!",
	};
};

const checkQuery = (key, value) => {
	if (regExp.test(value) && value.length <= 200 && value.length >= 25) {
		return { value, error: "" };
	}
	return {
		value,
		error:
			"Please enter a valid query, query must be more than 25 and less than 200 characters long.",
	};
};

export const sanitizeInputs = (inputs) => {
	for (const key in inputs) {
		if (inputs[key]) {
			inputs[key] = inputs[key].trim();
		} else {
			delete inputs[key];
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
