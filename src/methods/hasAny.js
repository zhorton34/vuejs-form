'use strict';

const variadic = require('../helpers/variadic.js');
const nestedValue = require('../helpers/nestedValue.js');

module.exports = function hasAny(...args) {
  const properties = variadic(args);
  const valuesExist = key => nestedValue(this.data, key);

  return properties.some(valuesExist);
};
