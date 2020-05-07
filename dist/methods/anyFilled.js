'use strict';

var dataGet = require('../helpers/dataGet');

var isEmpty = require('../helpers/isEmpty');

var fieldsOf = require('../helpers/fieldsOf');

module.exports = function anyFilled() {
  var _this = this;

  var valueFilled = function valueFilled(key) {
    return isEmpty(dataGet(_this.data, key)) === false;
  };

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return fieldsOf(this, args).has().some(valueFilled);
};