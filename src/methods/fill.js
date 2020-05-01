'use strict';

module.exports = function fill(input = {}) {
	Object.entries(input).forEach(([key, value]) => {
		if (this.empty(key)) {
			this.data[key] = value;
		}
	});
};
