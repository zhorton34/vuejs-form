"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var example = {
  family: {
    mom: {
      name: ''
    }
  }
};

var dataSet = function dataSet(target, value) {
  var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  if (path === '') return _objectSpread(_objectSpread({}, target), value);
  path = Array.isArray(path) ? path : path.split('.'); //
  // if (!path.includes('*')) {
  // 	target[path] = value;
  //
  // 	return target;
  // }

  var types = ['wildcard', 'object', 'array', 'value', 'empty'];

  var iterator = function iterator(path, loop) {
    return {
      loop: loop,
      last: loop.length === path.length,
      prev: loop === 0 ? false : loop - 1,
      next: loop === path.length ? false : loop + 1,
      left: path.length - loop
    };
  };

  var resolve = function resolve(target, path, iteration) {
    return {
      wildcard: path[iteration.loop] === '*',
      prevWildcard: iteration.prev ? path[iteration.prev] === '*' : false,
      nextWildcard: iteration.next ? path[iteration.next] === '*' : false,
      target: target,
      path: path
    };
  };

  var structure = function structure(target, path, value, segment, iterator, mapping) {
    return {
      mapping: mapping,
      path: target[path[iterator.loop]],
      prev: iterator.prev ? resolve(target, path, iterator) : false,
      next: iterator.next ? resolve(target, path, iterator) : false
    };
  };

  var loop = 0;
  var structures = [];
  path.forEach(function (segment) {
    structures[loop] = structure(target, path, value, segment, iterator(path, loop), structures);
    loop = loop + 1;
  });
  return structures;
};

dataSet(example, value, 'family.mom.name');