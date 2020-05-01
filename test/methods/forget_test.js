'use strict';

module.exports = (it, expect, form) => {
	it('should forget an input key value pair properly', () => {
		const example = form({ name: 'example', email: 'example@gmail.com' });

		expect(example.all()).to.eql({ name: 'example', email: 'example@gmail.com' });

		example.forget('name');

		expect(example.all()).to.eql({ email: 'example@gmail.com' });
	});
};
