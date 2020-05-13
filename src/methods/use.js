'use strict';

/**
 * Use Validator (vuejs-validators)
 *
 * @param validatable
 * @param options
 * @returns {*}
 */
module.exports = function use(validatable, options = {}) {
	this.setValidator = function (rules = {}, messages = {}, translator = {}) {
		this.validatorInstance = validatable(this.data, rules, messages, translator);

		return this;
	};

	this.hasValidator = function () {
		return typeof this.validatorInstance !== 'undefined';
	};

	this.rules = function (rules = {}) {
		if (this.validator()) {
			this.validator().setRules(rules);
		} else {
			this.validatorInstance = validatable(this.data, rules);
		}

		return this;
	};

	this.messages = function (messages = {}, rules = {}) {
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
