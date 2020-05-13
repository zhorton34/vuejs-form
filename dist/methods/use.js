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
    this.validatorInstance = validatable(this.data, rules, messages, translator);
    return this;
  };

  this.hasValidator = function () {
    return typeof this.validatorInstance !== 'undefined';
  };

  this.rules = function () {
    var rules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (this.validator()) {
      this.validator().setRules(rules);
    } else {
      this.validatorInstance = validatable(this.data, rules);
    }

    return this;
  };

  this.messages = function () {
    var messages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (this.hasValidator()) {
      this.validator().setMessages(messages);
    } else {
      this.validatorInstance = validatable(this.data, rules, messages);
    }

    return this;
  };

  this.validate = function () {
    this.validator().setData(this.data);
    this.validator().validate();
    return this;
  };

  this.validator = function () {
    return this.validatorInstance;
  };

  this.errors = function () {
    return this.validator().errors();
  };

  this.setValidator(options);
  return this;
};