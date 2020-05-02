'use strict';

const setKeys = require('../helpers/setkeys');
const dataGet = require('../helpers/dataGet');

module.exports = function hasAny(...args) {
  const value = key => dataGet(this.data, key);

  return setKeys(this, args).has().some(value);
};
