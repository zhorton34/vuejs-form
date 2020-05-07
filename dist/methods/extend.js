'use strict';

module.exports = function extend(name, callback) {
  if (Object.keys(this.constructor.prototype).includes(name)) {
    return console.error("Cant extend form with method ".concat(name, ", it already exists"));
  }

  this.constructor.prototype[name] = callback;
};