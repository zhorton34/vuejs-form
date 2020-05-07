'use strict';
/**
 * Use Validator (vuejs-validators)
 *
 * @param validatable
 * @param options
 * @returns {*}
 */

module.exports = function use(validatable) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
    return this;
  };

  this.getValidator = function () {
    return this.validator;
  };

  this.getErrors = function () {
    return this.getValidator().errors();
  };

  this.setValidator(options);
  return this;
};