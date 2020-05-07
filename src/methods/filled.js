'use strict';

const isEmpty = require('../helpers/isEmpty');
const dataGet = require('../helpers/dataGet');
const fieldsOf = require('../helpers/fieldsOf');

module.exports = function filled(...args) {
	const valueFilled = key => isEmpty(dataGet(this.data, key)) === false;

	return fieldsOf(this, args).has().every(valueFilled);
};
