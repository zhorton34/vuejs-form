'use strict';

const dataGet = require('../helpers/dataGet.js');

module.exports = function boolean(property) {
	const truthy = [1, "1", true, "true", "on", "yes"];

	return truthy.includes(dataGet(this.data, property));
};
