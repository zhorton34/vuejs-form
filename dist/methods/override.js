'use strict';
/**
 * Add/Extend Form Functionality With Custom Methods Using Macros
 *
 * @param name
 * @param fn
 */

module.exports = function override(name, fn) {
  if (Object.keys(this.constructor.prototype).includes(name)) {
    console.warn("\n\t\t\tOverriding default form method ".concat(name, ". With customized functionality. \n\t\t\tProceed with caution, you could break EVERYTHING...(Hopefully wont though :)\n\t\t"));
  }

  this.constructor.prototype[name] = fn;
};