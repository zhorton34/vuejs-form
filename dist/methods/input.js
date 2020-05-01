'use strict';

var isEmpty = require('../helpers/isEmpty.js');

var nestedValue = require('../helpers/nestedValue.js');

module.exports = function input(key) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return isEmpty(nestedValue(this.data, key)) ? defaultValue : nestedValue(this.data, key);
};