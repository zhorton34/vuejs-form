
'use strict';

module.exports = (it, expect, form) => {
	it('should be able to extend the base form prototype using a "macro"', () => {
		expect(typeof form({ email: 'e@g.com' }).example_local_macro_method === 'undefined').to.eql(true);

		form().macro('example_local_macro_method', function () {
			return 'hello world';
		});

		expect(typeof form({ email: 'e@g.com'}).example_local_macro_method === 'undefined').to.eql(false);
		expect(form().example_local_macro_method()).to.eql('hello world');
	});

	it('should not be able to forcibly overwrite a base form prototype function using a "macro"', () => {
		expect(form({ name: 'sam' }).all()).to.eql({ name: 'sam' });

		form().macro('all', function () {
			return 'hello world';
		});

		expect(form({ name: 'sam' }).all()).to.eql({ name: 'sam' });
	});

	it('should not apply localMacro everywhere', () => {
		form().localMacro('everywhere', () => 'world');

		let one = form({ first: 'test' });
		let two = form({ second: 'test' });

		expect(typeof one.everywhere === 'undefined').to.eql(true);
		expect(typeof two.everywhere === 'undefined').to.eql(true);

		one.localMacro('everywhere', () => 'world');

		expect(one.everywhere()).to.eql('world');
		expect(typeof two.everywhere === 'undefined').to.eql(true);
	});

	it('should allow macros to be applied on a specific instance instead of everywhere', () => {
		let does_have = form({ first: 'first' });
		let does_not_have = form({ second: 'test' });

		does_have.localMacro('localized', () => 'success');

		expect(typeof does_have.localized === 'undefined').to.eql(false);
		expect(typeof does_not_have.localized === 'undefined').to.eql(true);
	});
};
