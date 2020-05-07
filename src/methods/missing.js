'use strict';

const exists = require('../helpers/exists');
const dataGet = require('../helpers/dataGet');
const fieldsOf = require('../helpers/fieldsOf');

module.exports = function missing(...args) {
	const missing = key => !exists(dataGet(this.data, key));

	return fieldsOf(this, args).has().some(missing);
};
