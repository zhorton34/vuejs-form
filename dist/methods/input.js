'use strict';

var isEmpty = require('../helpers/isEmpty.js');

var nestedValue = require('../helpers/nestedValue.js');

module["export"] = function input(key) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!value) {
    return nestedValue(this.data, key);
  }

  {
    return isEmpty(nestedValue(this.data, key)) ? value : nestedValue(this.data, key);
  }
};