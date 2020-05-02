'use strict';

var exists = require('../helpers/exists');

var setKeys = require('../helpers/setKeys');

var dataGet = require('../helpers/dataGet');

module.exports = function missing() {
  var _this = this;

  var missing = function missing(key) {
    return !exists(dataGet(_this.data, key));
  };

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return setKeys(this, args).has().some(missing);
};