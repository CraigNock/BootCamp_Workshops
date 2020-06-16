// The purpose of this exercise is to re-implement standard array methods
// Do not use the array methods .map, .filter and .every
// You can use for loops to implement your logic

// Q8
// - filter(lst, func) returns a list with all the elements of lst that does not satisfy func removed
// - filter(lst, func) has fewer elements than lst
// - if lst = filter(lst, func) and x is an element of lst it means that:
//      x is an element of lst
//      f(x) is true
//
// Example:
// function isEven(x) {return x % 2 === 0;}
// filter([1, 2, 3, 4, 5], isEven) returns [2,4];

function filter(lst, func) {
    let newLst = []
    let long = (lst.length);
    for (let i=0 ; i < long ;i++) {
        if (func(lst[i]) ===true) {
            newLst.push (lst[i]);
        }
    }
    return newLst;
}
// -------------------------------------------------------------------------
function keepLong(str) { return str.length > 5 }
console.log('Q8: ', filter(['Cyborg', 'Robin', 'Batman', 'Superman', 'Aquaman', 'Flash'], keepLong));