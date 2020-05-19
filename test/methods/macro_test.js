
'use strict';

module.exports = (it, expect, form) => {
	it('should be able to extend base prototype using a "macro"', () => {
		expect(typeof form().example_macro_method === 'undefined').to.eql(true);

		form({}).macro('example_macro_method', function () {
			return 'hello world';
		});

		expect(typeof form({}).example_macro_method === 'undefined').to.eql(false);

		expect(form({}).example_macro_method()).to.eql('hello world');
	});

	it('should not be able to force overwrite on form prototype function using a "macro"', () => {
		expect(form({ name: 'sam' }).all()).to.eql({ name: 'sam' });

		form().macro('all', function () {
			return 'hello world';
		});

		expect(form({ name: 'sam' }).all()).to.eql({ name: 'sam' });
	});

	it('should apply macros everywhere or on every prototype instance created by default', () => {
		form().macro('macro_everywhere', () => 'world');

		let one = form({ first: 'test' });
		let two = form({ second: 'test' });

		expect(one.macro_everywhere()).to.eql('world');
		expect(two.macro_everywhere()).to.eql('world');

	});
};
