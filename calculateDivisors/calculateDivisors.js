// Please do not change the name of this function
var calculateDivisors = function (n) {
  let sum = 0;
  for (let i = 1; i< n; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i; sum += 0;
  }
  return sum;
};

if (typeof module !== 'undefined') {
  module.exports = {calculateDivisors};
}
