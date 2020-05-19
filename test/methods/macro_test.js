
'use strict';

module.exports = (it, expect, form) => {
	it('should be able to extend the base form prototype using a "macro"', () => {
		expect(typeof form({ email: 'e@g.com' }).example_macro_method === 'undefined').to.eql(true);

		form().macro('example_macro_method', function () {
			return 'hello world';
		});

		expect(typeof form({ email: 'e@g.com'}).example_macro_method === 'undefined').to.eql(false);
		expect(form().example_macro_method()).to.eql('hello world');
	});

	it('should not be able to forcibly overwrite a base form prototype function using a "macro"', () => {
		expect(form({ name: 'sam' }).all()).to.eql({ name: 'sam' });

		form().macro('all', function () {
			return 'hello world';
		});

		expect(form({ name: 'sam' }).all()).to.eql({ name: 'sam' });
	});
};
