'use strict';

var isEmpty = require('../helpers/isEmpty');

module.exports = function filled(key) {
  return !isEmpty(this.data[key]);
};