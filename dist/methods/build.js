'use strict';

var accessor = require('../helpers/accessor.js');

module.exports = function build() {
  return accessor(this);
};