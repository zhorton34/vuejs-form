'use strict';

const variadic = require('../helpers/variadic.js');

module.exports = function except(...args) {
  const properties = variadic(args);

  return Object.keys(this.data)
    .filter(property => !properties.includes(property))
    .reduce((only, field) => ({ [field]: this.data[field], ...only }), {});
};
