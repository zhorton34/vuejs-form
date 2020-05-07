'use strict';

var variadic = require('./variadic');

module.exports = function (form, keys) {
  var properties = variadic(keys);
  return properties.length > 0 ? {
    has: function has() {
      return properties;
    }
  } : {
    has: function has() {
      return form.keys();
    }
  };
};