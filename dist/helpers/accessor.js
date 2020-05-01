'use strict';
/**
 * Get value of a nested property
 *
 * @param form
 * @returns {*}
 */

module.exports = function access(form) {
  return new Proxy(form, {
    get: function get(target, key) {
      return Object.keys(target.data).includes(key) ? target.data[key] : target[key];
    },
    set: function set(target, key, value) {
      target.data[key] = value;
      return target.data[key] === value;
    }
  });
};