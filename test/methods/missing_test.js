'use strict';

module.exports = (it, expect, form) => {
	it('should be true if it is missing from the input', () => {
		expect(form({ name: 'example', email: 'example@gmail.com' }).missing('something')).to.eql(true)
	});
	it('should be false if it is not missing from the input (even if empty)', () => {
		expect(form({ name: 'example', email: '' }).missing('email')).to.eql(false)
	});
	it('should be true if any are missing from the input', () => {
		expect(form({ name: 'example', email: '' }).missing('email', 'something')).to.eql(true)
	});
	it('should be false if all are in the input', () => {
		expect(form({ name: 'example', email: '' }).missing('name', 'email')).to.eql(false)
	})
};
