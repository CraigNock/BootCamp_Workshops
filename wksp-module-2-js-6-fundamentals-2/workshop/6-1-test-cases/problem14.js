let verifyEquals = require('../../assets/verify-equals');

// Problem 14
// ----------
// Make this function return the input string wrapped to 40 characters per line. 
// This means you'll have to insert a newline \n character after every 40 characters in the input string. 
// If the next character after a cut is a space, then do not display it. 

// For example:
// with this input:
//      "Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam"

// the output would be:
//      Lorem ipsumos dolor sit amet consectetur
//      adipisicing elit. Magni quisquam"

// instead of:
//      Lorem ipsumos dolor sit amet consectetur
//       adipisicing elit. Magni quisquam

// even though there is a space before the a in adipisicing

function f(str) {
  let passage = '';
  let letts = str.split('');
  for (let i=0; i<letts.length; i++ ){
    if (i !== 0 && i % 40 === 0) {
      passage += '\n';
      if(letts[i] !== ' ') {
        passage += letts[i];
      }
    } else {
      passage += letts[i];
    }
  };
  return passage;
}




  // console.log(letts);
  // let linArr = [];
  // let block = [];
  // for (i=0 ; i < letts.length; i++){
  //   if (i < 39){
  //     linArr.push(letts[i]);
  //   }else if (letts[i] === ' '){
  //     console.log('space removed')
  //   } else {
  //     block.push(linArr);
  //     linArr = [];
  //     linArr.push(letts[i]);
  //   }
  // }
  // console.log("block " + block)
  // ///combine lines
  // let cleanBlock = block.map(function(lineForm){
  //   lineForm.join('');
  // });
  // console.log(cleanBlock);
  // //combine lines, adding breaks
  // let fullBlock = cleanBlock.join('/n')
  // //return
  // console.log(fullBlock);
  // return fullBlock;
  


// Test cases
let inputs  = ["Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam"];
let outputs = ["Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam"];

console.log(f(inputs[0]));
console.log(outputs[0])
// STOP -----------------------------------------------------------------
// No code changes below. This is the actual test that will run your test cases and validate your function.
function runTest(i) {
  if (i >= inputs.length) throw new Error('You do not have enough test cases');
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual);
}

runTest(0);
// runTest(1);
// runTest(2);
// runTest(3);
// runTest(4);

console.log('All tests passed for ' + __filename);
