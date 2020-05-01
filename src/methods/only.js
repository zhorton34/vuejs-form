'use strict';

const variadic = require('../helpers/variadic');

module.exports = function only(...args) {
  const properties = variadic(args);

  return properties.reduce((only, field) => ({
      [field]: this.data[field],
      ...only
  }), {});
};
