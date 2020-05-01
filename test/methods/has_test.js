'use strict';

module.exports = (it, expect, form) => {
	it('should return true if it has the given keys', () => {
		expect(form({ name: 'example', email: 'example@gmail.com' }).has('name', 'email')).to.eql(true)
	});

	it('should return false if it does not have any of the given keys', () => {
		expect(form({ name: 'example', email: 'example@gmail.com' }).has('name', 'email', 'missing')).to.eql(false)
	});
};
