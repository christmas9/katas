var path = require('path');
var expect = require('chai').expect;

var {everyContainsSomeTest} = require(path.join(__dirname, '..', './everyContainsSome.js'));

describe('everyContainsSomeTest()', function () {
  'use strict';
  it('Returns true for array where all conditions meet fn', () => {
    function remainder(num) {
        return num % 2 == 0;
    }
    const input = [2,4,6,8];
    const output = true;
    expect(everyContainsSomeTest.every(input, remainder)).to.eql(output);
});
it('Returns false for array where not all conditions meet fn', () => {
  function remainder(num) {
      return num % 2 == 0;
  }
  const input = [2,3,4,6,8];
  const output = false;
  expect(everyContainsSomeTest.every(input, remainder)).to.eql(output);
});
it('Returns true for array where all conditions meet fn', () => {
  function remainder(num) {
      return num % 2 == 0;
  }
  const input = [2,7,9,11];
  const output = true;
  expect(everyContainsSomeTest.some(input, remainder)).to.eql(output);
});
it('Returns false for array where not all conditions meet fn', () => {
function remainder(num) {
    return num % 2 == 0;
}
const input = [1,3,5];
const output = false;
expect(everyContainsSomeTest.some(input, remainder)).to.eql(output);
});
it('Returns true for array where number exists', () => {
  const value = 9;
  const input = [2,7,9,11];
  const output = true;
  expect(everyContainsSomeTest.contains(input, value)).to.eql(output);
});
it('Returns false for array where number exists', () => {
  const value = 12;
  const input = [2,7,9,11];
  const output = false;
  expect(everyContainsSomeTest.contains(input, value)).to.eql(output);
});
});
