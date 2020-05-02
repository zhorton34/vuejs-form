'use strict';

module.exports = (it, expect, form) => {
	it('should return true when key has a filled value', () => {
		expect(form({ check: 'hey' }).filled('check')).to.eql(true);
		expect(form({ check: ['hey'] }).filled('check')).to.eql(true);
		expect(form({ check: { wow: 'hey' } }).filled('check')).to.eql(true);
	});

	it('should return false when any key does not have a filled value', () => {
		expect(form({ check: '', checkTwo: 'value' }).filled('check', 'checkTwo')).to.eql(false);
	});

	it('should return true when all keys have a filled value', () => {
		expect(form({ check: 'fill', checkTwo: 'value' }).filled('check', 'checkTwo')).to.eql(true);
	});
	it('should return false when single key does not have a filled value', () => {
		expect(form({ check: '' }).filled('check')).to.eql(false);
	});

	it('should check all are filled when no arguments are provided', () => {
		expect(form({ one: '', two: '', three: '' }).filled()).to.eql(false);
		expect(form({ one: 'first', two: '', three: '' }).filled()).to.eql(false);
		expect(form({ one: '', two: ['second'], three: '' }).filled()).to.eql(false);
		expect(form({ one: '', two: '', three: { third: 'test' } }).filled()).to.eql(false);
		expect(form({ one: 'first', two: ['second'], three: { third: 'test' } }).filled()).to.eql(true);
	});
};
