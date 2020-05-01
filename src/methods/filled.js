'use strict';

const isEmpty = require('../helpers/isEmpty');
const variadic = require('../helpers/variadic');
const nestedValue = require('../helpers/nestedValue');

module.exports = function filled(...args) {
	const properties = variadic(args);
	const valueIsFilled = key => isEmpty(nestedValue(this.data, key)) === false;

	return properties.every(valueIsFilled);
};
