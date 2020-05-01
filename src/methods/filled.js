'use strict';

const isEmpty = require('../helpers/isEmpty');

module.exports = function filled(key) {
	return !isEmpty(this.data[key]);
};
