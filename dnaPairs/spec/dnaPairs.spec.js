var path = require('path');
var expect = require('chai').expect;

var {dnaPairs} = require(path.join(__dirname, '..', './dnaPairs.js'));

describe('dnaPairs()', function () {
  'use strict';
  
  it('returns an empty array for an empty string', function() {
    const input = ""
    const output = []
    expect(dnaPairs(input)).to.eql(output);
    });
  
  it('returns single nested array for one dna input', function() {
  const input = "G"
  const output = [ ["G", "C"] ]
  expect(dnaPairs(input)).to.eql(output);
  });

  it('returns single nested array for one dna input', function() {
    const input = "AG"
    const output = [ ["A", "T"], ["G", "C"] ]
    expect(dnaPairs(input)).to.eql(output);
    });

    
  it('returns single nested array for one dna input', function() {
    const input = "ATAG"
    const output = [ ["A", "T"], ["T", "A"], ["A", "T"], ["G", "C"] ]
    expect(dnaPairs(input)).to.eql(output);
    });

});
