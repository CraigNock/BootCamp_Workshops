// Q2a
// Write a function that accepts two integers and returns
// the greater one. (this is slightly different from the previous question.)

// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_obj_math.asp

function greater(num1, num2) {
    let biggest = Math.max(num1, num2);
    return biggest;
}
console.log(greater(2,9));

// Q2b
// Without changing the function at all, 
// can you figure out how we could use it to determine the greater number between 4 integers?
let numbers = [11, 2, 33, 156];
let largest = 0
numbers.forEach (function (num){
    largest = greater(num,largest);
})
console.log(largest)

// Q2c
// Would this work with more integers? 
//Yes 
let numbers2 = [11, 2, 33, 156, 0, 5, 55235, 324, -324];
let largest2 = 0
numbers2.forEach (function (num){
    largest2 = greater(num,largest2);
})
console.log(largest2)