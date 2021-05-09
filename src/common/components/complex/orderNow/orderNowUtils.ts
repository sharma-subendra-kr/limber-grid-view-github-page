import sanitizeHtml from "sanitize-html";
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
	result = checkPhone("phone", inputs.phone);
	inputs.phone = result.value;
	errors.phone = result.error;
	result = checkCompany("company", inputs.company);
	inputs.company = result.value;
	errors.company = result.error;
	result = checkPosition("position", inputs.position);
	inputs.position = result.value;
	errors.position = result.error;
	result = checkCompanyRevenue("companyRevenue", inputs.companyRevenue);
	inputs.companyRevenue = result.value;
	errors.companyRevenue = result.error;

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
		case "phone":
			result = checkPhone(name, value);
			inputs[name] = result.value;
			errors[name] = result.error;
			break;
		case "company":
			result = checkCompany(name, value);
			inputs[name] = result.value;
			errors[name] = result.error;
			break;
		case "position":
			result = checkPosition(name, value);
			inputs[name] = result.value;
			errors[name] = result.error;
			break;
		case "companyRevenue":
			result = checkCompanyRevenue(name, value);
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

const checkPhone = (key, value) => {
	const reg = new RegExp("[0-9a-zA-Z+-]+");
	if ((reg.test(value) && value.length <= 200) || value.length === 0) {
		return { value, error: "" };
	}
	return {
		value,
		error:
			"Please enter a valid phone number, phone number can have letters, numbers, + and -.",
	};
};

const checkCompany = (key, value) => {
	if ((regExp.test(value) && value.length <= 200) || value.length === 0) {
		return { value, error: "" };
	}
	return {
		value,
		error:
			"Please enter a valid company name, company name can't be more than 200 characters!",
	};
};

const checkPosition = (key, value) => {
	if ((regExp.test(value) && value.length <= 200) || value.length === 0) {
		return { value, error: "" };
	}
	return {
		value,
		error:
			"Please enter a valid position, position can't be more than 200 characters!",
	};
};

const checkCompanyRevenue = (key, value) => {
	return {
		value,
		error: "",
	};
};

export const getCompanyRevenue = (value) => {
	const map = {
		"lt 1m": "1",
		"gt 1m & lt 10m": "2",
		"gt 10m & lt 100m": "3",
		"gt 100m & lt 500m": "4",
		"gt 500m": "5",
	};
	if (!map[value]) {
		return "0";
	}
	return map[value];
};

export const sanitizeInputs = (inputs) => {
	for (const key in inputs) {
		if (inputs[key]) {
			inputs[key] = sanitizeHtml(inputs[key].trim());
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
