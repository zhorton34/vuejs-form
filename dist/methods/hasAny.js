'use strict';

var variadic = require('../helpers/variadic.js');

var nestedValue = require('../helpers/nestedValue.js');

module.exports = function hasAny() {
  var _this = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var properties = variadic(args);

  var valuesExist = function valuesExist(key) {
    return nestedValue(_this.data, key);
  };

  return properties.some(valuesExist);
};