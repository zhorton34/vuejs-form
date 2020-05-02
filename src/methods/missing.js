'use strict';

const exists = require('../helpers/exists');
const setKeys = require('../helpers/setKeys');
const dataGet = require('../helpers/dataGet');

module.exports = function missing(...args) {
	const missing = key => !exists(dataGet(this.data, key));

	return setKeys(this, args).has().some(missing);
};
