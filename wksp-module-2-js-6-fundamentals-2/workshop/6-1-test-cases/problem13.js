let verifyEquals = require('../../assets/verify-equals');

// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function f(str) {
    let strL = str.toLowerCase();
    let arr = strL.split('');
    console.log(arr);
    let half = Math.floor((arr.length)/2) -1 ;
    console.log(half);
    for (let i=0 ; i<half ; i++){
        if (arr[i] !== arr[arr.length - (i+1)]) {
            return false;
        };
    }
    return true;
}

// Test cases
let inputs = ['obo', 'hippo', 'hippih', 'CaNaC','canterbury','RADAR'];
let outputs = [true, false, true, true,false, true];

// STOP -----------------------------------------------------------------
// No code changes below. This is the actual test that will run your test cases and validate your function.
function runTest(i) {
    if (i >= inputs.length) throw new Error('You do not have enough test cases');
    let expected = outputs[i];
    let actual = f(inputs[i]);
    verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

console.log('All tests passed for ' + __filename);
