'use strict';

const dataGet = require('../helpers/dataGet');
const fieldsOf = require('../helpers/fieldsOf');

module.exports = function has(...args) {
  const value = key => dataGet(this.data, key);

  return fieldsOf(this, args).has().every(value);
};
