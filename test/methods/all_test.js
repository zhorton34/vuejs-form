'use strict';

module.exports = (it, expect, form) => {
  it('should return all form input as an object', () => {
    expect(form({ name: 'example', email: 'example@gmail.com' }).all()).to.eql({
      name: 'example',
      email: 'example@gmail.com'
    })
  });
};
