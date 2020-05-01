"use strict";
'strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function Form(input) {
  if (input !== undefined && !Array.isArray(input) && _typeof(input) !== 'object') {
    this.data = [input];
  } else if (input instanceof this.constructor) {
    this.data = input.all();
  } else {
    this.data = input || {};
  }
}

Form.prototype.all = require('./methods/all');
Form.prototype["boolean"] = require('./methods/boolean');
Form.prototype.empty = require('./methods/empty');
Form.prototype.except = require('./methods/except');
Form.prototype.fill = require('./methods/fill');
Form.prototype.filled = require('./methods/filled');
Form.prototype.forget = require('./methods/forget');
Form.prototype.has = require('./methods/has');
Form.prototype.hasAny = require('./methods/hasAny');
Form.prototype.input = require('./methods/input');
Form.prototype.keys = require('./methods/keys');
Form.prototype.missing = require('./methods/missing');
Form.prototype.only = require('./methods/only');
Form.prototype.set = require('./methods/set');
Form.prototype.toArray = require('./methods/toArray');
Form.prototype.wrap = require('./methods/wrap');

var accessor = require('./helpers/accessor');

var form = function form(input) {
  return accessor(new Form(input));
};

module.exports = form;
module.exports.form = form;
module.exports["default"] = form;
var example = form({
  name: 'zak',
  email: 'zak@cleancode.studio'
});
console.log(example.data.name);
example.name = 'test';
console.log(example.name);