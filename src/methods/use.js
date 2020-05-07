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
		this.validator = validatable(this.data, rules, messages, translator);

		return this;
	};

	this.hasValidator = function () {
		return typeof this.validator !== 'undefined';
	};

	this.rules = function (rules = {}) {
		if (this.hasValidator()) {
			this.getValidator().setRules(rules);
		} else {
			this.validator = validatable(this.data, rules);
		}

		return this;
	};

	this.messages = function (messages = {}) {
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
