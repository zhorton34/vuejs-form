'use strict';

var isEmpty = require('../helpers/isEmpty');

var variadic = require('../helpers/variadic');

var nestedValue = require('../helpers/nestedValue');

module.exports = function filled() {
  var _this = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var properties = variadic(args);

  var valueIsFilled = function valueIsFilled(key) {
    return isEmpty(nestedValue(_this.data, key)) === false;
  };

  return properties.every(valueIsFilled);
};