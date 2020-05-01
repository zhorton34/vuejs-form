'use strict';

module.exports = function extend(method, callback) {
  if (Object.keys(this).includes(method)) {
    return console.error("Cant extend form with ".concat(method, ", it already exists"));
  }

  this.constructor.prototype[name] = callback;
};