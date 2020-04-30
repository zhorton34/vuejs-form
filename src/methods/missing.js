'use strict';

const isEmpty = require('../helpers/isEmpty.js')
const nestedValue = require('../helpers/nestedValue.js')

module.exports = function missing(key) {
	return isEmpty(nestedValue(this.data, key))
};