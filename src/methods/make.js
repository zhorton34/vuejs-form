'use strict';

const accessor = require('../helpers/accessor');

module.exports = function make(input) {
	return accessor(new this.constructor(input));
};
