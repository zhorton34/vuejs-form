'use strict';

module.exports = (it, expect, form) => {
	it('should return true for truthy values(true, "true", "yes", "on", 1, and "1")', () => {
		expect(form({ check: true }).boolean('check')).to.eql(true);
		expect(form({ check: 'true' }).boolean('check')).to.eql(true);
		expect(form({ check: 'yes' }).boolean('check')).to.eql(true);
		expect(form({ check: 'on' }).boolean('check')).to.eql(true);
		expect(form({ check: 1 }).boolean('check')).to.eql(true);
		expect(form({ check: '1' }).boolean('check')).to.eql(true);
	});

	it('should return false for not truthy values(true, "true", "yes", "on", 1, and "1")', () => {
		expect(form({ check: false }).boolean('check')).to.eql(false);
		expect(form({ check: 'random' }).boolean('check')).to.eql(false);
		expect(form({ check: 0 }).boolean('check')).to.eql(false);
		expect(form({ check: [] }).boolean('check.0')).to.eql(false);
		expect(form({}).boolean('check')).to.eql(false);
	});
};
