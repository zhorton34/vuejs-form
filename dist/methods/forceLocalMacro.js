'use strict';
/**
 * Similar to "localMacro" function, with ability to forcibly overwrite base prototype methods and existing macro methods (On Local Instance instead of globally)
 * (See Laravel Macros For In Depth Explanation)
 *
 * @param name
 * @param fn
 * @return void
 */

module.exports = function forceMacro(name, fn) {
  console.warn("\n\t\tForcing macro to implement ".concat(name, " method -- Move forward with caution.\n\t\tWe recommend using \"macro\" in place of \"forceMacro\" method if you do not \n\t\tneed to override pre-existing or base behavior.\n\t "));
  this[name] = fn;
};