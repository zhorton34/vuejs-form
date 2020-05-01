'use strict';

var isEmpty = require('../helpers/isEmpty.js');

var nestedValue = require('../helpers/nestedValue.js');

module.exports = function filled(key) {
  return !isEmpty(this.data, key);
};