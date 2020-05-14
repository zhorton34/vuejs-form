'use strict';

module.exports = function fill(input = {}, value) {

	if (typeof value === "undefined") {
		Object.entries(input).forEach(([key, value]) => {
			if (this.empty(key)) {
				this.data[key] = value;
			}
		});
	} else if (this.empty(input)) {
		this.data[input] = value;
	}
};
