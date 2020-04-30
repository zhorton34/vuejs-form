'use strict';

const isEmpty = require('../helpers/isEmpty.js')
const nestedValue = require('../helpers/nestedValue.js')

module.exports = function filled(key) {
	return !isEmpty(this.data, key)
};