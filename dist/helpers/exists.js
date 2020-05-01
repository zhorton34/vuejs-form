'use strict';
/**
 * Determine if a key value pair is missing
 *
 * @param value
 * @returns boolean
 */

module.exports = function (value) {
  return typeof value !== "undefined";
};