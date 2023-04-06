export const toJSON = (json) => {
	try {
		return JSON.parse(json);
	} catch (error) {
		return null;
	}
};

export const jsonToString = (str) => {
	try {
		return JSON.stringify(str);
	} catch (error) {
		return null;
	}
};

