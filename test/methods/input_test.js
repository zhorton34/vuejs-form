'use strict';

module.exports = (it, expect, form) => {
	it('should except a key and then return the value, if its missing then return the default, if there is no default then return false', () => {
		expect(form({ name: 'example', email: 'example@gmail.com' }).input('name')).to.eql('example');
		expect(form({ name: 'example', email: 'example@gmail.com' }).input('something', 'default')).to.eql('default');
		expect(form({ name: 'example', email: 'example@gmail.com' }).input('something')).to.eql(false);
	});

	it('accept a key with a wildcard and be able to use the default value if the given value is empty', () => {
		expect(form({ name: 'example', email: 'example@gmail.com' }).input('something', 'default')).to.eql('default');
		expect(form({ name: 'example', email: 'example@gmail.com' }).input('something')).to.eql(false);

		expect(form({ family: {
				mom: { name: 'julie' }, dad: { name: 'rob' }
			}
		}).input('family.*.name')).to.eql(['julie', 'rob']);
		
		expect(form({ family: {
				mom: { name: 'julie' }, dad: { name: 'rob' }
			}
		}).input('family.*.email', ['julie@gmail.com', 'rob@gmail.com'])).to.eql(['julie@gmail.com', 'rob@gmail.com']);
	});


};
