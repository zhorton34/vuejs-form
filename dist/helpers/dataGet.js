"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isObject = function isObject(check) {
  return _typeof(check) === 'object' && Array.isArray(check) === false;
};

var isArray = function isArray(check) {
  return Array.isArray(check) === true;
};
/**
 * Get Nested Data With An Optional "*" wildcard
 */


module.exports = function (target) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (path === '') {
    return target;
  }

  path = Array.isArray(path) ? path : path.split('.');
  return path.reduce(function (value, segment) {
    if (segment === '*') {
      if (isArray(value)) {
        return value.reduce(function (list, item) {
          return [].concat(_toConsumableArray(list), [item]);
        }, []);
      } else if (isObject(value)) {
        return Object.values(value);
      } else {
        return value;
      }
    }

    if (isArray(value)) {
      return value.reduce(function (list, item) {
        if (isObject(item)) {
          return Object.keys(item).includes(segment) ? [].concat(_toConsumableArray(list), [item[segment]]) : _toConsumableArray(list);
        } else if (!isObject(item) && isArray(item)) {
          return [].concat(_toConsumableArray(list), [item[segment]]);
        } else {
          return [].concat(_toConsumableArray(list), [item]);
        }
      }, []);
    }

    if (isObject(value)) {
      return value[segment];
    }

    return value[segment] || value || null;
  }, target);
};