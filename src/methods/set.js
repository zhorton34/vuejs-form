
'use strict';

module.exports = function set(input = {}, value) {
	if (typeof value === "undefined") {
		Object.entries(input).forEach(([key, value]) => {
			this.data[key] = value;
		});
	} else {
		this.data[input] = value;
	}
};
