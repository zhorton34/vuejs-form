
'use strict';

module.exports = (it, expect, form) => {
	it('should be able to extend the base form prototype using "forceMacro"', () => {
		expect(Object.keys(form).includes('example_force_macro_method')).to.eql(false);

		form().forceMacro('example_force_macro_method', function () {
			return 'hello world';
		});

		expect(form().example_force_macro_method()).to.eql('hello world');
	});

	it('should be able to forcibly overwrite a base form prototype function using "forceMacro"', () => {

		expect(form({ name: 'sam' }).all()).to.eql({ name: 'sam' });

		form().forceMacro('all', function () {
			return 'hello world';
		});

		expect(form({ name: 'sam' }).all()).to.eql('hello world');

		form().forceMacro('all', function () {
			return this.data;
		});

		expect(form({ name: 'sam' }).all()).to.eql({ name: 'sam' });
	});

	it('should be able to forcibly overwrite a previously defined "macro"', () => {
		let example = form({ name: 'sam' });

		form().macro('inspire', function () {
			return `We believe in you ${this.data.name}`;
		});

		expect(example.inspire()).to.eql("We believe in you sam");

		form().forceMacro('inspire', function () {
			return `We have faith in you sarah`
		});

		expect(example.inspire()).to.eql("We have faith in you sarah");

	});

	form().forceMacro('all', function () {
		return this.data;
	});
};
