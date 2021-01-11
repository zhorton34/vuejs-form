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
      if (Object.keys(target.data).includes(key)) {
        if (!Object.keys(target).includes(key)) {
          target[key] = null; // Initialize an empty key if the property does not exist.
        }

        return target.data[key];
      }

      return target[key];
    },
    set: function set(target, key, value) {
      target.data[key] = value;
      return target.data[key] === value;
    }
  });
};