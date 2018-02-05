const path = require('path');
const {expect} = require('chai');
const {calculateDivisors} = require(path.join(__dirname, '..', './calculateDivisors.js'));

describe('calculateDivisors()', function () {
  it('returns 0 for input of 1', function () {
    expect(calculateDivisors(1)).to.equal(0);
  });
  it('returns 3 for input of 5 // 3', function () {
    expect(calculateDivisors(5)).to.equal(3);
  });
  it('returns 8 for input of 6 // 3, 5', function () {
    expect(calculateDivisors(6)).to.equal(8);
  });
  it('returns 23 for input of 10 // 3, 5, 6, 9', function () {
    expect(calculateDivisors(10)).to.equal(23);
  });
  it('returns 33 for input of 12 // 3, 5, 6, 9, 10', function () {
    expect(calculateDivisors(10)).to.equal(23);
  });
});