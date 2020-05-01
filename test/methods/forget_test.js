'use strict';

module.exports = (it, expect, form) => {
	it('should forget an input key value pair properly', () => {
		const example = form({ name: 'example', email: 'example@gmail.com' });

		expect(example.all()).to.eql({ name: 'example', email: 'example@gmail.com' });

		example.forget('name');

		expect(example.all()).to.eql({ email: 'example@gmail.com' });
	});

	it('should forget multiple input key value pair properly', () => {
		const example = form({ id: 1, name: 'example', email: 'example@gmail.com' });

		expect(example.all()).to.eql({ id: 1, name: 'example', email: 'example@gmail.com' });

		example.forget('name', 'id');

		expect(example.all()).to.eql({ email: 'example@gmail.com' });
	});
};
