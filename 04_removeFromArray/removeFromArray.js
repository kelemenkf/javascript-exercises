const removeFromArray = function(array, ...items) {
    for (let i = 0; i < array.length; i++) {

        if (items.includes(array[i])) {
            array.splice(i, 1);
            i--;
        } else if (!(array[i] in items)) {
            continue;
        } 
    } 
    return array;
};
// input an array, remove the item given to be removed. 
// Do not edit below this line
module.exports = removeFromArray;
