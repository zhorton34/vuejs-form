'use strict';

const variadic = require('../helpers/variadic.js');
const nestedValue = require('../helpers/nestedValue.js');

module.exports = function has(...args) {
  const properties = variadic(args);

  return properties.filter(key => nestedValue(this.data, key)).length > 0;
};
