'use strict';

const isEmpty = require('../helpers/isEmpty');
const dataGet = require('../helpers/dataGet');
const setKeys = require('../helpers/setKeys.js');

module.exports = function empty(...properties) {
  	const emptyValue = key => isEmpty(dataGet(this.data, key));

	return setKeys(this, properties).has().some(emptyValue);
};
