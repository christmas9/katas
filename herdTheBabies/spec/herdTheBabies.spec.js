const expect = require('chai').expect;
const {herdTheBabies} = require('../herdTheBabies');

describe('herdTheBabies()', function () {
  it('"aA"should return "Aa"', function () {
  expect(herdTheBabies("aA")).to.eql("Aa")  
  });
  it('"aBA"should return "AaB"', function () {
  expect(herdTheBabies("aBA")).to.eql("AaB")  
  });
  it('"bbaBccAC"should return "AaBbbCcc"', function () {
  expect(herdTheBabies("bbaBccAC")).to.eql("AaBbbCcc")  
  });
});