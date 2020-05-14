
'use strict';

module.exports = (it, expect, form) => {
	it('should set input data and override previous non empty data', () => {
		const example = form({ id: null, email: 'example@gmail.com' });

		expect(example.all()).to.eql({ id: null, email: 'example@gmail.com' });

		example.set({ id: 1, email: 'hey@g.com' });

		expect(example.all()).to.eql({ id: 1, email: 'hey@g.com' });
	});
};
