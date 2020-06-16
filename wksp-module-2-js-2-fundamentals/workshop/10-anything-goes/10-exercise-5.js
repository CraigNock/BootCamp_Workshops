// Q5
// Write a JavaScript program to find ALL the Armstrong 
// numbers between 0 and 999, store them in array an output
// that array to the console.

// Note : An Armstrong number of three digits is an integer 
// such that the sum of the cubes of its digits is equal 
// to the number itself. For example,
// 371 is an Armstrong number since 3*3 + 7*3 + 1*3 = 371.

function findArm(){

    let armstrongNumbers = [];

    for (let num = 0; num<1000 ; num++) {
        let numA = (num.toString()).split('');
        let x = numA.length;
        let sum = 0
        
        for (let i = 0 ; i < (x + 1) ; i++) {
            if (numA[i] >= 0 ) {
                sum += (Math.pow(numA[i], x));
            }
        }
        if (num === sum) {
            armstrongNumbers.push(num);
        }
    };
console.log(armstrongNumbers);
}

findArm();


