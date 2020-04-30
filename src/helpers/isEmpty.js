'use strict'

/**
 * Determine if a value is empty
 *
 * @param value
 * @returns bool
 */
module.exports = function (value) {
	if (value == null || String.isEmpty(obj)) return true;
	if (Array.isArray(value)) return value.length === 0;
	for (var key in value) if (Object.keys(Value, key)) return false;
	return true
}