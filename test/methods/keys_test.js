'use strict';

module.exports = (it, expect, form) => {
	it('should return an array of the input keys', () => {
		expect(form({ name: 'example', email: 'example@gmail.com' }).keys()).to.eql(['name', 'email'])
	});
};
