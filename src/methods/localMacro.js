
'use strict';

/**
 * Add/Extend Form Functionality On Specific Instance With Custom Methods Using LocalMacro
 *
 * @param name
 * @param fn
 */
module.exports = function localMacro(name, fn) {
	if (typeof this.constructor.prototype[name] !== 'undefined' || typeof this[name] !== 'undefined') {
		console.error(`Cant extend form with ${name} localMacro, it already exists (use forceLocalMacro if you want to forcibly overwrite base behavior or previously set macro/localMacro`);
	} else {
		this[name] = fn;
	}
};
