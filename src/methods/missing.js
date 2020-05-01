'use strict';

const exists = require('../helpers/exists');
const variadic = require('../helpers/variadic');
const nestedValue = require('../helpers/nestedValue');

module.exports = function missing(...args) {
	const properties = variadic(args);
	const valueIsMissing = key => !exists(nestedValue(this.data, key));

	return properties.some(valueIsMissing);
};
