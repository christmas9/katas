var expect = require('chai').expect;
var {foldString} = require('../foldStrings');

describe('foldString', function () {
  it('returns a reversed string for an even length input', function() {
  expect(foldString('baab')).to.eql('abba');  
  });
  it('returns a reversed string for an odd length input', function() {
    expect(foldString('baklava')).to.eql('kablava');  
    });
    it('returns the same string for a two letter input', function() {
      expect(foldString('ab')).to.eql('ab');  
      });
});
