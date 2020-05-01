'use strict';

const isEmpty = require('../helpers/isEmpty.js');
const nestedValue = require('../helpers/nestedValue.js');

module.exports = function input(key, defaultValue = false) {
	return isEmpty(nestedValue(this.data, key))
		? defaultValue
		: nestedValue(this.data, key);
};
