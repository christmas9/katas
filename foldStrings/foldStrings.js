// Please do not change the name of this function
function foldString(str) {
  if (str.length > 3) {
  if (str.length % 2 === 0) {
    const middle = str.length / 2;
    const firstHalf = str.slice(0,middle).split('').reverse().join('');
    const secondHalf = str.slice(middle).split('').reverse().join('');
    return str = firstHalf.concat(secondHalf);
  } else {
    const middle = Math.floor(str.length / 2);
    const firstHalf = str.slice(0,middle).split('').reverse().join('');
    const middleChar = str.slice(middle, middle+1);
    const secondHalf = str.slice(middle+1).split('').reverse().join('');
    return str = firstHalf.concat(middleChar, secondHalf);
  }
}


  return str;
}

module.exports = {foldString};
