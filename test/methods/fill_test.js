'use strict';

module.exports = (it, expect, form) => {
	it('should fill in input data but not override previous non empty data', () => {
		const example = form({ id: null, email: 'example@gmail.com' });

		expect(example.all()).to.eql({ id: null, email: 'example@gmail.com' });

		example.fill({ id: 1, email: 'hey@g.com' });

		expect(example.all()).to.eql({ id: 1, email: 'example@gmail.com' });
	});
};
