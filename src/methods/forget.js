
'use strict';

const fieldsFrom = require('../helpers/fieldsOf.js');

module.exports = function forget(...list) {
    const fields = fieldsFrom(this, list);

    this.data = fields.isEmpty() ? {} : this.except(...fields.toArray());
};
