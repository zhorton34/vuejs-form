'use strict';

var exists = require('../helpers/exists');

var dataGet = require('../helpers/dataGet');

var fieldsOf = require('../helpers/fieldsOf');

module.exports = function missing() {
  var _this = this;

  var missing = function missing(key) {
    return !exists(dataGet(_this.data, key));
  };

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return fieldsOf(this, args).has().some(missing);
};