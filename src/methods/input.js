'use strict';

const isEmpty = require('../helpers/isEmpty.js');
const dataGet = require('../helpers/dataGet.js');

module.exports = function input(key, defaultValue = false) {
	const value = dataGet(this.data, key);

	return isEmpty(value) ? defaultValue : value;
};
