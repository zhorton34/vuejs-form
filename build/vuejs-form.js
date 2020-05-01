var vuejsform =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/helpers/accessor.js":
/*!**********************************!*\
  !*** ./dist/helpers/accessor.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Get value of a nested property\n *\n * @param mainObject\n * @param key\n * @returns {*}\n */\n\nmodule.exports = function access(form) {\n  return new Proxy(form, {\n    get: function get(target, key) {\n      return Object.keys(target.data).includes(key) ? target.data[key] : target[key];\n    },\n    set: function set(target, key, value) {\n      target.data[key] = value;\n    }\n  });\n};\n\n//# sourceURL=webpack://vuejsform/./dist/helpers/accessor.js?");

/***/ }),

/***/ "./dist/helpers/isEmpty.js":
/*!*********************************!*\
  !*** ./dist/helpers/isEmpty.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Determine if a value is empty\n *\n * @param value\n * @returns bool\n */\n\nmodule.exports = function (value) {\n  if (value == null || String.isEmpty(obj)) return true;\n  if (Array.isArray(value)) return value.length === 0;\n\n  for (var key in value) {\n    if (Object.keys(Value, key)) return false;\n  }\n\n  return true;\n};\n\n//# sourceURL=webpack://vuejsform/./dist/helpers/isEmpty.js?");

/***/ }),

/***/ "./dist/helpers/nestedValue.js":
/*!*************************************!*\
  !*** ./dist/helpers/nestedValue.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Get value of a nested property\n *\n * @param mainObject\n * @param key\n * @returns {*}\n */\n\nmodule.exports = function nestedValue(mainObject, key) {\n  try {\n    return key.split('.').reduce(function (obj, property) {\n      return obj[property];\n    }, mainObject);\n  } catch (err) {\n    return null;\n  }\n};\n\n//# sourceURL=webpack://vuejsform/./dist/helpers/nestedValue.js?");

/***/ }),

/***/ "./dist/helpers/variadic.js":
/*!**********************************!*\
  !*** ./dist/helpers/variadic.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Variadic helper function\n *\n * @param args\n * @returns {*}\n */\n\nmodule.exports = function variadic(args) {\n  if (Array.isArray(args[0])) {\n    return args[0];\n  }\n\n  return args;\n};\n\n//# sourceURL=webpack://vuejsform/./dist/helpers/variadic.js?");

/***/ }),

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n'strict';\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction Form(input) {\n  if (input !== undefined && !Array.isArray(input) && _typeof(input) !== 'object') {\n    this.data = [input];\n  } else if (input instanceof this.constructor) {\n    this.data = input.all();\n  } else {\n    this.data = input || {};\n  }\n}\n\nForm.prototype.all = __webpack_require__(/*! ./methods/all */ \"./dist/methods/all.js\");\nForm.prototype[\"boolean\"] = __webpack_require__(/*! ./methods/boolean */ \"./dist/methods/boolean.js\");\nForm.prototype.empty = __webpack_require__(/*! ./methods/empty */ \"./dist/methods/empty.js\");\nForm.prototype.except = __webpack_require__(/*! ./methods/except */ \"./dist/methods/except.js\");\nForm.prototype.fill = __webpack_require__(/*! ./methods/fill */ \"./dist/methods/fill.js\");\nForm.prototype.filled = __webpack_require__(/*! ./methods/filled */ \"./dist/methods/filled.js\");\nForm.prototype.forget = __webpack_require__(/*! ./methods/forget */ \"./dist/methods/forget.js\");\nForm.prototype.has = __webpack_require__(/*! ./methods/has */ \"./dist/methods/has.js\");\nForm.prototype.hasAny = __webpack_require__(/*! ./methods/hasAny */ \"./dist/methods/hasAny.js\");\nForm.prototype.input = __webpack_require__(/*! ./methods/input */ \"./dist/methods/input.js\");\nForm.prototype.keys = __webpack_require__(/*! ./methods/keys */ \"./dist/methods/keys.js\");\nForm.prototype.missing = __webpack_require__(/*! ./methods/missing */ \"./dist/methods/missing.js\");\nForm.prototype.only = __webpack_require__(/*! ./methods/only */ \"./dist/methods/only.js\");\nForm.prototype.set = __webpack_require__(/*! ./methods/set */ \"./dist/methods/set.js\");\nForm.prototype.toArray = __webpack_require__(/*! ./methods/toArray */ \"./dist/methods/toArray.js\");\nForm.prototype.wrap = __webpack_require__(/*! ./methods/wrap */ \"./dist/methods/wrap.js\");\n\nvar accessor = __webpack_require__(/*! ./helpers/accessor */ \"./dist/helpers/accessor.js\");\n\nvar form = function form(input) {\n  return accessor(new Form(input));\n};\n\nmodule.exports = form;\nmodule.exports.form = form;\nmodule.exports[\"default\"] = form;\nvar example = form({\n  name: 'zak',\n  email: 'zak@cleancode.studio'\n});\nconsole.log(example.data.name);\nexample.name = 'test';\nconsole.log(example.name);\n\n//# sourceURL=webpack://vuejsform/./dist/index.js?");

/***/ }),

/***/ "./dist/methods/all.js":
/*!*****************************!*\
  !*** ./dist/methods/all.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function all() {\n  return this.data;\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/all.js?");

/***/ }),

/***/ "./dist/methods/boolean.js":
/*!*********************************!*\
  !*** ./dist/methods/boolean.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar nestedValue = __webpack_require__(/*! ../helpers/nestedValue.js */ \"./dist/helpers/nestedValue.js\");\n\nmodule.exports = function _boolean(key) {\n  return [1, \"1\", true, \"true\", \"on\", \"yes\"].includes(nestedValue(this.data, key));\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/boolean.js?");

/***/ }),

/***/ "./dist/methods/empty.js":
/*!*******************************!*\
  !*** ./dist/methods/empty.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isEmpty = __webpack_require__(/*! ../helpers/isEmpty.js */ \"./dist/helpers/isEmpty.js\");\n\nvar variadic = __webpack_require__(/*! ../helpers/variadic.js */ \"./dist/helpers/variadic.js\");\n\nvar nestedValue = __webpack_require__(/*! ../helpers/nestedValue.js */ \"./dist/helpers/nestedValue.js\");\n\nmodule.exports = function empty() {\n  var _this = this;\n\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  var properties = variadic(args);\n  return properties.filter(function (key) {\n    return isEmpty(nestedValue(_this.data, key));\n  }).length === properties.length;\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/empty.js?");

/***/ }),

/***/ "./dist/methods/except.js":
/*!********************************!*\
  !*** ./dist/methods/except.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar variadic = __webpack_require__(/*! ../helpers/variadic.js */ \"./dist/helpers/variadic.js\");\n\nmodule.exports = function except() {\n  var _this = this;\n\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  var properties = variadic(args);\n  return Object.keys(this.data).filter(function (property) {\n    return !properties.includes(property);\n  }).reduce(function (only, field) {\n    return _objectSpread(_defineProperty({}, field, _this.data[field]), only);\n  }, {});\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/except.js?");

/***/ }),

/***/ "./dist/methods/fill.js":
/*!******************************!*\
  !*** ./dist/methods/fill.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nmodule.exports = function fill(data) {\n  this.data = _objectSpread(_objectSpread({}, data), this.data);\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/fill.js?");

/***/ }),

/***/ "./dist/methods/filled.js":
/*!********************************!*\
  !*** ./dist/methods/filled.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isEmpty = __webpack_require__(/*! ../helpers/isEmpty.js */ \"./dist/helpers/isEmpty.js\");\n\nvar nestedValue = __webpack_require__(/*! ../helpers/nestedValue.js */ \"./dist/helpers/nestedValue.js\");\n\nmodule.exports = function filled(key) {\n  return !isEmpty(this.data, key);\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/filled.js?");

/***/ }),

/***/ "./dist/methods/forget.js":
/*!********************************!*\
  !*** ./dist/methods/forget.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function forget(key) {\n  if (Array.isArray(this.data)) {\n    this.data.splice(key, 1);\n  } else {\n    delete this.data[key];\n  }\n\n  return this;\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/forget.js?");

/***/ }),

/***/ "./dist/methods/has.js":
/*!*****************************!*\
  !*** ./dist/methods/has.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar variadic = __webpack_require__(/*! ../helpers/variadic.js */ \"./dist/helpers/variadic.js\");\n\nvar nestedValue = __webpack_require__(/*! ../helpers/nestedValue.js */ \"./dist/helpers/nestedValue.js\");\n\nmodule.exports = function has() {\n  var _this = this;\n\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  var properties = variadic(args);\n  return properties.filter(function (key) {\n    return nestedValue(_this.data, key);\n  }).length === properties.length;\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/has.js?");

/***/ }),

/***/ "./dist/methods/hasAny.js":
/*!********************************!*\
  !*** ./dist/methods/hasAny.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar variadic = __webpack_require__(/*! ../helpers/variadic.js */ \"./dist/helpers/variadic.js\");\n\nvar nestedValue = __webpack_require__(/*! ../helpers/nestedValue.js */ \"./dist/helpers/nestedValue.js\");\n\nmodule.exports = function has() {\n  var _this = this;\n\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  var properties = variadic(args);\n  return properties.filter(function (key) {\n    return nestedValue(_this.data, key);\n  }).length > 0;\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/hasAny.js?");

/***/ }),

/***/ "./dist/methods/input.js":
/*!*******************************!*\
  !*** ./dist/methods/input.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar isEmpty = __webpack_require__(/*! ../helpers/isEmpty.js */ \"./dist/helpers/isEmpty.js\");\n\nvar nestedValue = __webpack_require__(/*! ../helpers/nestedValue.js */ \"./dist/helpers/nestedValue.js\");\n\nmodule[\"export\"] = function input(key) {\n  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n\n  if (!value) {\n    return nestedValue(this.data, key);\n  }\n\n  {\n    return isEmpty(nestedValue(this.data, key)) ? value : nestedValue(this.data, key);\n  }\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://vuejsform/./dist/methods/input.js?");

/***/ }),

/***/ "./dist/methods/keys.js":
/*!******************************!*\
  !*** ./dist/methods/keys.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function keys() {\n  return Object.keys(this.data);\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/keys.js?");

/***/ }),

/***/ "./dist/methods/missing.js":
/*!*********************************!*\
  !*** ./dist/methods/missing.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isEmpty = __webpack_require__(/*! ../helpers/isEmpty.js */ \"./dist/helpers/isEmpty.js\");\n\nvar nestedValue = __webpack_require__(/*! ../helpers/nestedValue.js */ \"./dist/helpers/nestedValue.js\");\n\nmodule.exports = function missing(key) {\n  return isEmpty(nestedValue(this.data, key));\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/missing.js?");

/***/ }),

/***/ "./dist/methods/only.js":
/*!******************************!*\
  !*** ./dist/methods/only.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar variadic = __webpack_require__(/*! ../helpers/variadic.js */ \"./dist/helpers/variadic.js\");\n\nmodule.exports = function only() {\n  var _this = this;\n\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  var properties = variadic(args);\n  return properties.reduce(function (only, field) {\n    return _objectSpread(_defineProperty({}, field, _this.data[field]), only);\n  }, {});\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/only.js?");

/***/ }),

/***/ "./dist/methods/set.js":
/*!*****************************!*\
  !*** ./dist/methods/set.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nmodule.exports = function set(data) {\n  this.data = _objectSpread(_objectSpread({}, this.data), data);\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/set.js?");

/***/ }),

/***/ "./dist/methods/toArray.js":
/*!*********************************!*\
  !*** ./dist/methods/toArray.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function toArray() {\n  return Object.entries(this.data);\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/toArray.js?");

/***/ }),

/***/ "./dist/methods/wrap.js":
/*!******************************!*\
  !*** ./dist/methods/wrap.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nmodule.exports = function wrap(key) {\n  return _defineProperty({}, key, _objectSpread({}, this.data));\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/wrap.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack://vuejsform/(webpack)/buildin/module.js?");

/***/ })

/******/ });