'use strict';

module.exports = (it, expect, form) => {
	it('form input should except a key and then return the value, if its missing then return the default, if there is no default then return false', () => {
		expect(form({ name: 'example', email: 'example@gmail.com' }).input('name')).to.eql('example');
		expect(form({ name: 'example', email: 'example@gmail.com' }).input('something', 'default')).to.eql('default');
		expect(form({ name: 'example', email: 'example@gmail.com' }).input('something')).to.eql(false);

	});
};
