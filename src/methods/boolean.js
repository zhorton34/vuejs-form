'use strict';

const nestedValue = require('../helpers/nestedValue.js')

module.exports = function boolean(key) {
	return [1, "1", true, "true", "on", "yes"].includes(nestedValue(this.data, key))
};