// For exercises 4 to 8, you are not allowed to for or while loops.
// Instead focus on the array methods (filter, map, forEach, etc)

// You will also need to verify that your functions work as expected. Be sure to test them. :)

// Q6
// Adds "Hello " to every element of greet
// For example: greet(["bob", "eric"]) returns ["Hello bob", "Hello eric"]

function greet(lst) {
    let helloArray = [];
    lst.forEach(function(name){
        helloArray.push(`Hello ${name}`);
    })
    return helloArray;
}
// -------------------------------------------------------------------------
console.log('Q6 greet()', greet(['David', 'Billy', 'Lisa', 'Jennifer']));