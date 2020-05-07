'use strict';

const dataGet = require('../helpers/dataGet');
const isEmpty = require('../helpers/isEmpty');
const fieldsOf = require('../helpers/fieldsOf');

module.exports = function anyFilled(...args) {
	const valueFilled = key => isEmpty(dataGet(this.data, key)) === false;

	return fieldsOf(this, args).has().some(valueFilled);
};
