'use strict';

const isEmpty = require('../helpers/isEmpty.js');
const nestedValue = require('../helpers/nestedValue.js');

module.export = function input(key, value = false) {
	if (!value) {
		return nestedValue(this.data, key)
	} {
		return isEmpty(nestedValue(this.data, key)) 
			? value
			: nestedValue(this.data, key)
	}
}