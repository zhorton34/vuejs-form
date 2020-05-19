'use strict';
const variadic = require('./variadic');

module.exports = function (form, keys) {
	const properties = variadic(keys);

	return properties.length > 0
		? {
			has: () => properties,
			toArray: () => Array.isArray(properties) ? properties : Array.from(properties),
			isEmpty: () => Array.isArray(properties) ? properties.length === 0 : Array.from(properties).length === 0
		}
		: {
			has: () => form.keys(),
			toArray: () => form.keys(),
			isEmpty: () => form.keys().length === 0
	}
};
