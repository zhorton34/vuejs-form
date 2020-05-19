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
VueForm.prototype.localMacro = require('./methods/localMacro');
VueForm.prototype.forceLocalMacro = require('./methods/forceLocalMacro');
VueForm.prototype.macro = require('./methods/macro');
VueForm.prototype.forceMacro = require('./methods/forceMacro');
VueForm.prototype.proxy = require('./methods/proxy');
VueForm.prototype.build = require('./methods/build');
VueForm.prototype.use = require('./methods/use');

var form = function form(dataOrValidatable, data) {
  if (typeof data === "undefined") {
    return new VueForm(dataOrValidatable).proxy();
  } else if (typeof dataOrValidatable === 'function') {
    return new VueForm(data).use(dataOrValidatable, {}).proxy();
  } else if (typeof dataOrValidatable !== 'function' && typeof data !== "undefined") {
    console.error("form(validatable, data): validatable must be an instance of vuejs-validators: See vuejs-form Docs");
    console.log("vuejs-form has a powerful, optional, validation library. vuejs-validators");
    console.log("vuejs-validators exports a validator function");
    console.log('vuejs-validators docs: https://github.com/zhorton34/vuejs-validators');
    console.log('vuejs-forms docs: https://github.com/zhorton34/vuejs-form');
    console.log('If you are trying make your vuejs-form data "validatable": ', '1: Install vuejs-validators', '2: Pass in vuejs-validators "validation" instance as the 1st parameter and the form data as the 2nd parameter (Ex: "form(validator, data)")');
    console.log("-----------------");
    console.log('To create a vuejs-form that is NOT "validatable" simply:', '1: Omit the second parameter', '2: Pass in data as the first parameter', '2: Non Validatable Form Example: form({ name: "sarah", email: "sarah.smith@gmail.com" })');
  }

  return new VueForm(data).proxy();
};

var validatable = require('vuejs-validators');

var _require = require('vuejs-validators'),
    MessageBag = _require.MessageBag,
    MessageBagFactory = _require.MessageBagFactory;

var ValidatableForm = function ValidatableForm() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return form(validatable, data);
};

module.exports = ValidatableForm;
module.exports.VueForm = VueForm;
module.exports.SimpleForm = form;
module.exports.validator = validatable;
module.exports["default"] = ValidatableForm;
module.exports.ValidatableForm = ValidatableForm;
module.exports.MessageBag = MessageBag;
module.exports.MessageBagFactory = MessageBagFactory;