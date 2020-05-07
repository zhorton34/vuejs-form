'use strict';

var dataGet = require('../helpers/dataGet');

var fieldsOf = require('../helpers/fieldsOf');

module.exports = function hasAny() {
  var _this = this;

  var value = function value(key) {
    return dataGet(_this.data, key);
  };

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return fieldsOf(this, args).has().some(value);
};