'use strict';

const nestedValue = require('../helpers/nestedValue.js')

module.exports = function boolean(key) {
	const truthy = [1, "1", true, "true", "on", "yes"];
	return truthy.includes(nestedValue(this.data, key))
};
