const variadic = require('./variadic.js');

module.exports = function (form, keys) {
	const properties = variadic(keys);

	return properties.length > 0
		? { has: () => properties }
		: { has: () => form.keys() }
};
