'use strict';

var isEmpty = require('../helpers/isEmpty.js');

var dataGet = require('../helpers/dataGet.js');

module.exports = function input(key) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var value = dataGet(this.data, key);
  return isEmpty(value) ? defaultValue : value;
};