'use strict';

module.exports = (it, expect, form) => {
	it('should return true if it has the given keys', () => {
		expect(form({ name: 'example', email: 'example@gmail.com' }).has('name', 'email')).to.eql(true)
	});

	it('should return false if it does not have any of the given keys', () => {
		expect(form({ name: 'example', email: 'example@gmail.com' }).has('name', 'email', 'missing')).to.eql(false)
	});

	it('should return true or false based on values existing within wild card paths', () => {
		expect(form({ post: {
			meta: { tags: ['one', 'two', 'three'] },
		}}).has('post.meta.tags')).to.eql(true);

		expect(form({ post: { meta: {  }, }}).has('post.meta.tags')).to.eql(false)
	});
};
