
'use strict';

/**
 * Similar to "macro" function, with ability to forcibly overwrite base prototype methods and existing macro methods
 * (See Laravel Macros For In Depth Explanation)
 *
 * @param name
 * @param fn
 * @return void
 */
module.exports = function forceMacro(name, fn) {
	console.warn(`
		Forcing macro to implement ${name} method -- Move forward with caution.
		We recommend using "macro" in place of "forceMacro" method if you do not 
		need to override pre-existing or base behavior.
	 `);

	this[name] = fn;
	this.constructor.prototype[name] = fn;
};
