'use strict';

const variadic = require('../helpers/variadic.js');
const nestedValue = require('../helpers/nestedValue.js');

module.exports = function has(...args) {
  const properties = variadic(args);
  const valueExists = key => nestedValue(this.data, key);

  return properties.every(valueExists);
};
