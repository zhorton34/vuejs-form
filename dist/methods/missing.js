'use strict';

var exists = require('../helpers/exists');

var variadic = require('../helpers/variadic');

var nestedValue = require('../helpers/nestedValue');

module.exports = function missing() {
  var _this = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var properties = variadic(args);

  var valueIsMissing = function valueIsMissing(key) {
    return !exists(nestedValue(_this.data, key));
  };

  return properties.some(valueIsMissing);
};