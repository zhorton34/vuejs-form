'use strict';

/**
 * Determine if a value is empty
 *
 * @param value
 * @returns boolean
 */
module.exports = function (value) {
	if (value === null || value === '') return true;
	if (Array.isArray(value)) return value.length === 0;
	for (const key in value) if (Object.keys(value, key)) return false;
	return true;
};
