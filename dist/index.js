'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function VueForm(input) {
  if (input !== undefined && !Array.isArray(input) && _typeof(input) !== 'object') {
    this.data = [input];
  } else if (input instanceof this.constructor) {
    this.data = input.all();
  } else {
    this.data = input || {};
  }
}

VueForm.prototype.anyFilled = require('./methods/anyFilled');
VueForm.prototype.all = require('./methods/all');
VueForm.prototype["boolean"] = require('./methods/boolean');
VueForm.prototype.empty = require('./methods/empty');
VueForm.prototype.except = require('./methods/except');
VueForm.prototype.extend = require('./methods/extend');
VueForm.prototype.fill = require('./methods/fill');
VueForm.prototype.filled = require('./methods/filled');
VueForm.prototype.forget = require('./methods/forget');
VueForm.prototype.has = require('./methods/has');
VueForm.prototype.hasAny = require('./methods/hasAny');
VueForm.prototype.input = require('./methods/input');
VueForm.prototype.keys = require('./methods/keys');
VueForm.prototype.make = require('./methods/make');
VueForm.prototype.missing = require('./methods/missing');
VueForm.prototype.only = require('./methods/only');
VueForm.prototype.set = require('./methods/set');
VueForm.prototype.toArray = require('./methods/toArray');
VueForm.prototype.wrap = require('./methods/wrap');

VueForm.prototype.macro = function (name, fn) {
  this.constructor.prototype[name] = fn;
};

var accessor = require('./helpers/accessor');

var form = function form() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new VueForm(data);
};

var MakeForm = function MakeForm() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return accessor(new VueForm(data));
};

form().macro('proxy', function () {
  return accessor(this);
});
form().macro('use', function (validatable, options) {
  this.setValidator = function () {
    var rules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var translator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    this.validator = validatable(this.data, rules, messages, translator);
    return this;
  };

  this.hasValidator = function () {
    return typeof this.validator !== 'undefined';
  };

  this.rules = function () {
    var rules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (this.hasValidator()) {
      this.getValidator().setRules(rules);
    } else {
      this.validator = validatable(this.data, rules);
    }

    return this;
  };

  this.messages = function () {
    var messages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (this.hasValidator()) {
      this.getValidator().setMessages(messages);
    } else {
      this.validator = validatable(this.all(), messages);
    }

    return this;
  };

  this.validate = function () {
    this.getValidator().setData(this.data);
    this.getValidator().validate();
  };

  this.getValidator = function () {
    return this.validator;
  };

  this.getErrors = function () {
    return this.getValidator().errors();
  };

  this.setValidator(options);
  return this.proxy();
});
module.exports = form;
module.exports.form = form;
module.exports["default"] = form;
module.exports.VueForm = VueForm;
module.exports.MakeForm = MakeForm;