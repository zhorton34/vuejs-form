'use strict';

const setKeys = require('../helpers/setKeys');
const dataGet = require('../helpers/dataGet');

module.exports = function has(...args) {
  const value = key => dataGet(this.data, key);

  return setKeys(this, args).has().every(value);
};
