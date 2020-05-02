'use strict';

var setKeys = require('../helpers/setKeys');

module.exports = function forget() {
  var _this = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  setKeys(this, args).has().forEach(function (property) {
    return delete _this.data[property];
  });
};