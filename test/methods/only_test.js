'use strict';

module.exports = (it, expect, form) => {
	it('should return only the key/values where the pairs line up with the passed in keys', () => {
		expect(form({ name: 'example', email: 'example@gmail.com' }).only('email')).to.eql({
			email: 'example@gmail.com'
		});

		expect(form({ id: 1, name: 'example', email: 'example@gmail.com' }).only('id', 'email')).to.eql({
			id: 1, email: 'example@gmail.com'
		});
	})
};
