'use strict';

var isEmpty = require('../helpers/isEmpty');

var variadic = require('../helpers/variadic');

var nestedValue = require('../helpers/nestedValue');

module.exports = function empty() {
  var _this = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var properties = variadic(args);

  var valueIsEmpty = function valueIsEmpty(key) {
    return isEmpty(nestedValue(_this.data, key));
  };

  return properties.some(valueIsEmpty);
};