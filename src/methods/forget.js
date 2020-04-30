'use strict';

module.exports = function forget(key) {
  if (Array.isArray(this.data)) {
    this.data.splice(key, 1);
  } else {
    delete this.data[key];
  }

  return this;
};