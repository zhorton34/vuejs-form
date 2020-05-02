"use strict";

var variadic = require('./variadic.js');

module.exports = function (form, keys) {
  var properties = variadic(keys);
  return properties.length > 0 ? {
    orAll: function orAll() {
      return properties;
    }
  } : {
    orAll: function orAll() {
      return form.keys();
    }
  };
};