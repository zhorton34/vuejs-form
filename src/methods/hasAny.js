'use strict';

const dataGet = require('../helpers/dataGet');
const fieldsOf = require('../helpers/fieldsOf');

module.exports = function hasAny(...args) {
  const value = key => dataGet(this.data, key);

  return fieldsOf(this, args).has().some(value);
};
