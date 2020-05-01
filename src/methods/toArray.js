'use strict';

module.exports = function toArray() {
 	return Object.entries(this.data).map(([key, value]) => ({ key, value }))
};
