// Please do not change the name of this function
var dnaPairs = function (dna) {
  var pairs = {'A':'T', 'T':'A', 'G':'C', 'C':'G'};
  if (typeof (dna) != "undefined") {
        return dna.split('').map(function(character) {    
        return [character, pairs[character]];
      }
    )
  } else {
        return []
}
};

if (typeof module !== 'undefined') {
  module.exports = {dnaPairs};
}
