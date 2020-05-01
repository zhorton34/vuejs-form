'use strict';

module.exports = (it, expect, form) => {
	it('should return true when key has a filled value', () => {
		expect(form({ check: 'hey' }).filled('check')).to.eql(true);
		expect(form({ check: ['hey'] }).filled('check')).to.eql(true);
		expect(form({ check: { wow: 'hey' } }).filled('check')).to.eql(true);
	});

	it('should return false when key does not have a filled value', () => {
		expect(form({ check: '' }).filled('check')).to.eql(false);
		// expect(form({ check: [] }).filled('check')).to.eql(false);
		// expect(form({ check: {} }).filled('check')).to.eql(false);
	});
};
