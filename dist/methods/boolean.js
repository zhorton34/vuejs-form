'use strict';

var nestedValue = require('../helpers/nestedValue.js');

module.exports = function _boolean(key) {
  var truthy = [1, "1", true, "true", "on", "yes"];
  return truthy.includes(nestedValue(this.data, key));
};