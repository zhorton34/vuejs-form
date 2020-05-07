'use strict';

const accessor = require('../../src/helpers/accessor.js');

module.exports = (it, expect, form) => {
	it('should return true given the accessor proxy properly accesses form.data[name] value via form[name]', () => {
		let example = accessor({ data: { name: 'sam' } });

		expect(example.name).to.eql('sam');
	});

	it('should return false given the accessor proxy is not used and form.data[name] value does not equal form[name]', () => {
		let example = { data: { name: 'sam' } };

		expect(example.name === 'sam').to.eql(false);
	});

	it('should return true for proxy successfully working when adding a form without allowing form.data[name] value access via form[name]', () => {
		let example = form({ name: 'sam' });

		expect(example.name).to.eql('sam');
	});

	it('should return true for proxy successfully working when adding a form validatable. Allowing form.data[name] value access via form[name]', () => {
		const Validator = function (data = {}, rules = {}, messages = {}, translator = {}) {
			this.data = data;
			this.rules = rules;
			this.messages = messages;
			this.translator = translator;
		};

		const validatable = (data = {}, rules = {}, messages = {}, translator = {}) => (new Validator(data, rules, messages, translator));

		let example = form(validatable, { name: 'sam' });

		expect(example.name).to.eql('sam');
	});
};

