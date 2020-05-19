
'use strict';

module.exports = (it, expect, form) => {
	it('should be able to extend the instance of form prototype using "forceLocalMacro"', () => {
		let example = form();
		expect(Object.keys(example).includes('example_force_macro_method')).to.eql(false);

		example.forceLocalMacro('example_force_local_macro', function () {
			return 'hello world';
		});

		expect(example.example_force_local_macro()).to.eql('hello world');
		expect(typeof form({}).example_force_local_macro === 'undefined').to.eql(true);
	});

	it('should be able to forcibly overwrite a base form prototype function using "forceMacro"', () => {

		let example = form({ name: 'sam' });
		expect(example.all()).to.eql({ name: 'sam' });

		example.forceLocalMacro('all', function () {
			return 'hello world';
		});

		expect(example.all()).to.eql('hello world');
		expect(form({ name: 'sam' }).all()).to.eql({ name: 'sam' });
	});

	it('should be able to forcibly overwrite a previously defined "macro"', () => {
		let example = form({ name: 'sam' });

		example.localMacro('inspire', function () {
			return `We believe in you ${this.data.name}`;
		});

		expect(example.inspire()).to.eql("We believe in you sam");

		example.forceLocalMacro('inspire', function () {
			return `We have faith in you sarah`
		});

		expect(example.inspire()).to.eql("We have faith in you sarah");
	});

};
