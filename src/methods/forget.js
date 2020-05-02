'use strict';

const setKeys = require('../helpers/setKeys');

module.exports = function forget(...args) {
    setKeys(this, args).has().forEach(property => delete this.data[property]);
};
