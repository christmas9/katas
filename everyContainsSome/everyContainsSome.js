// need to make ok for objects, need to add optional parameters

// Please do not change the name of these functions
var everyContainsSomeTest = {
  every: function (list, func) {
  // returns true if every value of list passes, else false
  count = 0;
  for (let i = 0; i<list.length; i++) {
    if (func(list[i]) === true) count += 1; count += 0;
  }
if (count == list.length) return true; return false;
  },

  contains: function (list, value) {
  // returns true if value exists at least once within list 
    for (let i = 0; i<list.length; i++) {
      if (list[i] === value) return true;
    }
    return false;
  },

  some: function (list, func) {
  // returns true if at least one 
  for (let i = 0; i<list.length; i++) {
    if (func(list[i]) === true) return true;
  }
  return false;
  }
};

if ( typeof module !== 'undefined' ) {
  module.exports = {everyContainsSomeTest};
}
