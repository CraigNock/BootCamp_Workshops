// Q6
// Take the code you wrote in Q5 and now let's create a
// reusable function that takes two arguments,
// numbers that dictate the range within which to look for 
// Armstrong numbers.

// This means that our code from the previous question will need to be tweaked a little
// to determine Armstrong numbers of different lengths.
// e.g.
// a number of 1 digit; each digit is to the power of 1
// a number of 2 digit; each digit is to the power of 2
// a number of 3 digit; each digit is to the power of 3
// a number of 4 digit; each digit is to the power of 4
// a number of 5 digit; each digit is to the power of 5

// See this site for a list of "narcissistic" numbers
// http://mathworld.wolfram.com/NarcissisticNumber.html

function identifyArmstrongNumbers(num1, num2) {
    
        let armstrongNumbers = [];
    
        for (let arm = num1; arm < (num2 + 1) ; arm++) {
            let armArray = (arm.toString()).split('');
            let x = armArray.length;
            
            let sum = 0
            for (let i = 0 ; i < (x + 1) ; i++) {
                if (armArray[i] >= 0 ) {
                    sum += (Math.pow(armArray[i], x));
                }
            }
            
            if (arm === sum) {
                armstrongNumbers.push(arm);
            }
        };
    console.log(armstrongNumbers);
    }

console.log(identifyArmstrongNumbers(100, 99999));