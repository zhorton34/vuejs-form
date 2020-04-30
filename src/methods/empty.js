'use strict';

const isEmpty = require('../helpers/isEmpty.js');
const variadic = require('../helpers/variadic.js');
const nestedValue = require('../helpers/nestedValue.js');

module.exports = function empty(...args) {
  	const properties = variadic(args);

	return properties.filter(key => isEmpty(nestedValue(this.data, key))).length === properties.length;
};
