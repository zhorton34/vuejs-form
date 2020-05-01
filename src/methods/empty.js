'use strict';

const isEmpty = require('../helpers/isEmpty');
const variadic = require('../helpers/variadic');
const nestedValue = require('../helpers/nestedValue');

module.exports = function empty(...args) {
  	const properties = variadic(args);
  	const valueIsEmpty = key => isEmpty(nestedValue(this.data, key));

	return properties.some(valueIsEmpty);
};
