'use strict';

var nestedValue = require('../helpers/nestedValue.js');

module.exports = function _boolean(key) {
  return [1, "1", true, "true", "on", "yes"].includes(nestedValue(this.data, key));
};