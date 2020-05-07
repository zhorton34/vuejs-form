'use strict';

const fieldsOf = require('../helpers/fieldsOf.js');

module.exports = function forget(...args) {
    fieldsOf(this, args).has().forEach(property => delete this.data[property]);
};
