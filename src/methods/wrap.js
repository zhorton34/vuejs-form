'use strict';

module.exports = function wrap(key) {
	return key.split('.').reverse().reduce((payload, property) => ({
		[property]: { ...payload }
	}), this.data);
};
