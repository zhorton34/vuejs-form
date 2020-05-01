'use strict';

module.exports = (it, expect, collect) => {
  it('should return all items, simple object', () => {
    expect(form({ name: 'example', email: 'example@gmail.com' }).all()).to.eql({
      name: 'example',
      email: 'example@gmail.com'
    })
  });
};