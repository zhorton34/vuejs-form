'use strict';

const isEmpty = require('../helpers/isEmpty');
const dataGet = require('../helpers/dataGet');
const fieldsOf = require('../helpers/fieldsOf.js');

module.exports = function empty(...properties) {
  	const emptyValue = key => isEmpty(dataGet(this.data, key));

	return fieldsOf(this, properties).has().some(emptyValue);
};
