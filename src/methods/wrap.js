'use strict';

module.exports = function wrap(key) {
 	return { [key]: { ...this.data } }
};
