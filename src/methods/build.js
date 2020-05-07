'use strict';

const accessor = require('../helpers/accessor.js');

module.exports = function build() {
	return accessor(this);
};
