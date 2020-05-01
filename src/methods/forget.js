'use strict';

const variadic = require('../helpers/variadic');

module.exports = function forget(...args) {
    const properties = variadic(args);

    properties.forEach(property => delete this.data[property]);
};
