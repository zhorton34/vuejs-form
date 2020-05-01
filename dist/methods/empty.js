'use strict';

var isEmpty = require('../helpers/isEmpty');

var variadic = require('../helpers/variadic');

module.exports = function empty() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var properties = variadic(args);
  var input = this.data;
  var empty = properties.filter(function (key) {
    return isEmpty(input[key]);
  });
  return empty.length === properties.length;
};