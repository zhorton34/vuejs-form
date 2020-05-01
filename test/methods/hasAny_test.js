'use strict';

module.exports = (it, expect, form) => {
	it('should return true if it has any of the given keys', () => {
		expect(form({ name: 'example', email: 'example@gmail.com' }).hasAny('name', 'missing')).to.eql(true)
	});

	it('should return false if its missing all of the given keys', () => {
		expect(form({ name: 'example', email: 'example@gmail.com' }).hasAny('something', 'missing')).to.eql(false)
	});
};
