// For exercises 4 to 8, you are not allowed to for or while loops.
// Instead focus on the array methods (filter, map, forEach, etc)

// You will also need to verify that your functions work as expected. Be sure to test them. :)

// Q7
// Only greet people who's names have length at least 4.
// Otherwise ignore them completely.
// For example: greeLong(["bob", "daniel"]) returns ["Hello daniel"]

function greetLong(lst) {
    let ret = lst.filter(function(word) {
        return ((word.toString()).length >= 4);
    })
    let helloArray = [];
    ret.forEach(function(name){
        helloArray.push(`Hello ${name}`);
    })
    return helloArray;
}
// -------------------------------------------------------------------------
console.log('Q7 greetLong()', greetLong(['Scott', 'Bob', 'Ric', 'Xanrath The Destroyer']));