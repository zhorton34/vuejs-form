'use strict';

module.exports = (it, expect, form) => {
	it('should be true if it is missing from the input', () => {
		expect(form({ name: 'example', email: 'example@gmail.com' }).missing('something')).to.eql(true)
	});
	it('should be false if it is not missing from the input', () => {
		expect(form({ name: 'example', email: '' }).missing('email')).to.eql(true)
	});
};
