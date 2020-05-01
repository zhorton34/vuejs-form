'use strict';

module.exports = (it, expect, form) => {
	it('should return data object wrapped or nested under the wrapped property key', () => {
		expect(form({ name: 'example', email: 'example@gmail.com' }).wrap('data')).to.eql({
			data: { name: 'example', email: 'example@gmail.com' }
		})
	});
};
