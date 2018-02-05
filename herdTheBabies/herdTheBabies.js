// Please do not change the name of this function

function herdTheBabies (str) {
    
    var firstArrSort = str.split('').sort();
    console.log(firstArrSort);
    var newArr = firstArrSort.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).join('');
    console.log(newArr);
    return newArr;
}

module.exports = {herdTheBabies};