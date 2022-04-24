const sumAll = function(a, b) {

    let sum = 0;

    let parType1 = typeof a;
    let parType2 = typeof b;


    if (parType1 !==  'number' || parType2 !== 'number' || a < 0 || b < 0) {
        return "ERROR";
    } else if (a < b) {
        for (let i = a; i <= b; i++) {
            sum += i;
        }
        return sum;
    } else if (a > b) {
        for (let i = a; i >= b; i--) {
            sum += i;
        }
        return sum;
    }

};

// Do not edit below this line
module.exports = sumAll;
