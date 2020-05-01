'use strict';

var isEmpty = require('../helpers/isEmpty.js');

var nestedValue = require('../helpers/nestedValue.js');

module.exports = function missing(key) {
  return isEmpty(nestedValue(this.data, key));
};