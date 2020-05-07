'use strict';

var accessor = require('../helpers/accessor.js');

module.exports = function proxy() {
  return accessor(this);
};