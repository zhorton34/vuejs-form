'use strict';

module.exports = (it, expect, form) => {
	it('should return an array of key value pair objects', () => {
		expect(form({ name: 'example', email: 'example@gmail.com' }).toArray()).to.eql(
			[
				{ key: 'name', value: 'example' },
				{ key: 'email', value: 'example@gmail.com' }
			]
		)
	});
};
