'use strict';

module.exports = (it, expect, form) => {
	it('should return true when any key has a anyFilled value', () => {
		expect(form({ check: 'hey', two: '' }).anyFilled('check', 'two')).to.eql(true);
		expect(form({ check: ['hey'], two: [] }).anyFilled('check', 'two')).to.eql(true);
		expect(form({ check: { wow: 'hey' }, two: '' }).anyFilled('check', 'two')).to.eql(true);
	});

	it('should return false when no key has a anyFilled value', () => {
		expect(form({ check: '', checkTwo: '' }).anyFilled('check', 'checkTwo')).to.eql(false);
	});

	it('should return true when all keys have a anyFilled value', () => {
		expect(form({ check: 'fill', checkTwo: 'value' }).anyFilled('check', 'checkTwo')).to.eql(true);
	});

	it('should return false when single key does not have a anyFilled value', () => {
		expect(form({ check: '' }).anyFilled('check')).to.eql(false);
	});

	it('should return true when wild card is used to find key', () => {
		expect(form({ tags: [ { name: 'one' }, { name: 'two' } ] }).anyFilled('tags.*.name')).to.eql(true);
	});

	it('should return false when wild card is used to find key', () => {
		expect(form({ tags: { list: [], category: 'example' } }).anyFilled('tags.list.*')).to.eql(false);
	});

	it('should check all values when no arguments are provided', () => {
		expect(form({ one: '', two: '', three: '' }).anyFilled()).to.eql(false);
		expect(form({ one: 'first', two: '', three: '' }).anyFilled()).to.eql(true);
		expect(form({ one: '', two: ['second'], three: '' }).anyFilled()).to.eql(true);
		expect(form({ one: '', two: '', three: { third: 'test' } }).anyFilled()).to.eql(true);
	});
};
