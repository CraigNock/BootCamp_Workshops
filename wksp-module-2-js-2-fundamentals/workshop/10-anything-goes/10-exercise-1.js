// HINT:
// You can get the Nth character, or letter, from a string by writing "string"[N].
// The returned value will be a string containing only one character (for example, "b").
// The first character has position 0, which causes the last one to be found at position string.length - 1.
// In other words, a two-character string has length 2, and its characters have positions 0 and 1.


// Q1
// Write a function countBs that takes a string as its only argument
// and returns a number that indicates how many uppercase “B”
// characters there are in the string.

function countBs(str) {
    let array = [];
    for( let i=0; i< (str.length); i++){
        array.push(str[i]);
    }
        let countArray = array.filter(function(letter){
        return (letter === 'B');
    })
    return countArray.length;
}
// -------------------------------------------------------------------------
console.log('Q1: ', countBs('BananaBabyBubbles'));