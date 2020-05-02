'use strict';

module.exports = (it, expect, form) => {
	it('should return true if it has any of the given keys', () => {
		expect(form({ name: 'example', email: 'example@gmail.com' }).hasAny('name', 'missing')).to.eql(true)
	});

	it('should return false if its missing all of the given keys', () => {
		expect(form({ name: 'example', email: 'example@gmail.com' }).hasAny('something', 'missing')).to.eql(false)
	});

	it('should return true or false based on values existing within wild card paths', () => {
		expect(form({ post: {
				meta: { tags: ['one', 'two', 'three'] },
			}}).hasAny('post.meta.tags', 'something')).to.eql(true);

		expect(form({ post: { meta: {  }, }}).hasAny('post.meta.tags')).to.eql(false)
	});
};
