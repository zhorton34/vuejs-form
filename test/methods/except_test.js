'use strict';

module.exports = (it, expect, form) => {
	it('should return all except the key/values where the pairs key lines up with the passed in keys', () => {
		expect(form({ name: 'example', email: 'example@gmail.com' }).except('name')).to.eql({
			email: 'example@gmail.com'
		});

		expect(form({ id: 1, name: 'example', email: 'example@gmail.com' })
			.except('name', 'email')).to.eql({ id: 1 });
	})
};
