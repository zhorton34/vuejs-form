'use strict';

const dataGet = require('../helpers/dataGet');
const isEmpty = require('../helpers/isEmpty');
const setKeys = require('../helpers/setKeys.js');

module.exports = function anyFilled(...args) {
	const valueFilled = key => isEmpty(dataGet(this.data, key)) === false;

	return setKeys(this, args).has().some(valueFilled);
};
