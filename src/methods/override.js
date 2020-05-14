
'use strict';

/**
 * Add/Extend Form Functionality With Custom Methods Using Macros
 *
 * @param name
 * @param fn
 */
module.exports = function override(name, fn) {
	if (Object.keys(this.constructor.prototype).includes(name)) {
		console.warn(`
			Overriding default form method ${name}. With customized functionality. 
			Proceed with caution, you could break EVERYTHING...(Hopefully wont though :)
		`);
	}

	this.constructor.prototype[name] = fn;
};
