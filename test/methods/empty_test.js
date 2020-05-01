'use strict';

module.exports = (it, expect, form) => {
	it('should return true when string, array, or object is empty', () => {
		expect(form({ one: '', two: [], three: {} }).empty('one', 'two', 'three')).to.eql(true);
	});

	it('should return true when some are filled but an empty exists', () => {
		expect(form({ one: '', two: 'hey', three: 'world' }).empty('one', 'two', 'three')).to.eql(true);
	});

	it('should return true when string, array, or object are empty', () => {
		expect(form({ one: 'hey', two: [], three: {} }).empty('one', 'two', 'three')).to.eql(true);
		expect(form({ one: '', two: ['yo'], three: {} }).empty('one', 'two', 'three')).to.eql(true);
		expect(form({ one: '', two: [], three: { hi: 'world' } }).empty('one', 'two', 'three')).to.eql(true);
	});

	it('should return false when string, array, or object are filled', () => {
		expect(form({ one: 'hey' }).empty('one')).to.eql(false);
		expect(form({ two: ['yo'] }).empty('two')).to.eql(false);
		expect(form({ three: { hi: 'world' } }).empty('three')).to.eql(false);
	});
};
