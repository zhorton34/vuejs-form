
'use strict';

/**
 * Add/Extend Form Functionality On Specific Instance With Custom Methods Using LocalMacro
 *
 * @param name
 * @param fn
 */
module.exports = function localMacro(name, fn) {
	if (Object.keys(this.constructor.prototype).includes(name)) {
		return console.error(`Cant extend form with ${name} localMacro, it already exists (use forceLocalMacro if you want to forcibly overwrite base behavior or previously set macro/localMacro`);
	}

	this[name] = fn;
};
