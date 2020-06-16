let verifyEquals = require('../../assets/verify-equals');

// Problem 10
// ----------
// Make this function return the input string, capitalized. You must use a for loop. For example:
// f("hello world"); // Hello World
// f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

// HINT:
//    - Use a for loop to capitalize the words one by one
//    - Use the toUpperCase string method

function f(str) {
  if(typeof(str) !== 'string'){
    return undefined;
  };
  strL = str.toLowerCase();
  let arr = strL.split(' ');
  console.log(arr);
  let result = []
  for (i=0 ; i < arr.length ; i++) {
    
    
    let word = (arr[i]);
    console.log(word);
    word.split('')
    cap = word.charAt(0).toUpperCase() + word.slice(1);

    result.push(cap);
  };
  console.log(result);
  return result.join(' ');
  

}

// Test cases
let inputs = ['do we have beans?', 'down to 0', 'i', 8, 'them'];
let outputs = ['Do We Have Beans?', 'Down To 0', 'I', undefined, 'Them'];

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
