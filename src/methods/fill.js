'use strict';

module.exports = function fill(data) {
	this.data = {
		...data,
		...this.data,
	}
};