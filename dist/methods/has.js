'use strict';

var variadic = require('../helpers/variadic.js');

var nestedValue = require('../helpers/nestedValue.js');

module.exports = function has() {
  var _this = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var properties = variadic(args);

  var valueExists = function valueExists(key) {
    return nestedValue(_this.data, key);
  };

  return properties.every(valueExists);
};