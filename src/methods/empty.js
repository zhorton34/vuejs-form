'use strict';

const isEmpty = require('../helpers/isEmpty');
const variadic = require('../helpers/variadic');

module.exports = function empty(...args) {
  	const properties = variadic(args);

  	const input = this.data;
  	const empty = properties.filter(key => isEmpty(input[key]));

	return empty.length === properties.length;
};
