'use strict';

module.exports = (it, expect, form) => {
	it('should return true when string, array, or object is empty', () => {
		expect(form({ one: '', two: [], three: {} }).empty('one', 'two', 'three')).to.eql(true);
	});

	it('should return false when string, array, or object are not empty', () => {
		expect(form({ one: 'hey', two: [], three: {} }).empty('one', 'two', 'three')).to.eql(false);
		expect(form({ one: '', two: ['yo'], three: {} }).empty('one', 'two', 'three')).to.eql(false);
		expect(form({ one: '', two: [], three: { hi: 'world' } }).empty('one', 'two', 'three')).to.eql(false);
	});
};
