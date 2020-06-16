// Q4
// Write a function that takes an array and a value as arguments and
// returns true if the value is in the array else it returns false.

function itemIsPresent(array, item) {
    let result = false;
    array.forEach(function(match) {
        if (item === match){
            result = true;
        }
    });
    return result;
};



// Test case
const myArray = ['bacon', 'purple', 'door', 'window', 'exist', 'code', 'program', 'funky'];

console.log(itemIsPresent(myArray, 'funky'));
