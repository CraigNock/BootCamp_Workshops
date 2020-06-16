// Q10
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here
function calculateAverage(grades) {
    let total = 0;
    grades.forEach(function(score){
        total += score;
    })
    let average = (total / grades.length);
    if (average >= 90){
        return 'A'
    }else if(average >= 80){
        return 'B'
    }else if(average >= 70){
        return 'C'
    }else if(average >= 60){
        return 'D'
    }else{
        return 'F'
    }
}


console.log(calculateAverage([48, 95, 65, 48, 59, 78, 72, 65]));
console.log(calculateAverage([81, 85, 89]));
console.log(calculateAverage([61, 65, 69]));
console.log(calculateAverage([51, 55, 59]));



// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well


