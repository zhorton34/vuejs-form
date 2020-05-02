'use strict';

const isEmpty = require('../helpers/isEmpty');
const setKeys = require('../helpers/setKeys');
const dataGet = require('../helpers/dataGet');

module.exports = function filled(...args) {
	const valueFilled = key => isEmpty(dataGet(this.data, key)) === false;

	return setKeys(this, args).has().every(valueFilled);
};
