'use strict';

var dataGet = require('../helpers/dataGet.js');

module.exports = function _boolean(property) {
  var truthy = [1, "1", true, "true", "on", "yes"];
  return truthy.includes(dataGet(this.data, property));
};