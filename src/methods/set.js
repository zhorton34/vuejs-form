'use strict';

module.exports = function set(input = {}) {
	Object.entries(input).forEach(([key, value]) => {
		this.data[key] = value;
	});
};
