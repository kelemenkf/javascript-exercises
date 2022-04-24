const reverseString = function(string) {
    let stringArray = string.split("");
    let revereArray = stringArray.reverse();
    let result = revereArray.join("")
    return result;
};

// Do not edit below this line
module.exports = reverseString;
