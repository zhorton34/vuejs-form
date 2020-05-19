'use strict';

var variadic = require('./variadic');

module.exports = function (form, keys) {
  var properties = variadic(keys);
  return properties.length > 0 ? {
    has: function has() {
      return properties;
    },
    toArray: function toArray() {
      return Array.isArray(properties) ? properties : Array.from(properties);
    },
    isEmpty: function isEmpty() {
      return Array.isArray(properties) ? properties.length === 0 : Array.from(properties).length === 0;
    }
  } : {
    has: function has() {
      return form.keys();
    },
    toArray: function toArray() {
      return form.keys();
    },
    isEmpty: function isEmpty() {
      return form.keys().length === 0;
    }
  };
};