'use strict';

module.exports = function set(data) {
	this.data = {
		...this.data,
		...data
	}
};
