// Exercise 3 (hard)
// -------------------
const colors = ['argyle',"red", "orange",'buffalo brown', "yellow", "green", "pink", "black", "gray", "blue", "violet", 'tartan'];

// The array above contains all the colors in the visible light spectrum but has some
// that don't belong. In case you've forgotten, the colors in the spectrum are:
// red, orange, yellow, green, blue, violet

// Write a script that removes the incorrect colors and output the corrected array to the console.

// You must console the colors array.
// NO for loops!

// colors[4] = 'blue';
// colors[5] = 'violet';

// colors.pop();
// colors.pop();
// colors.pop();

let remove = [];

colors.forEach((color) => {
    switch (color) {
        case 'red':
            break;
        case 'orange':
            break;
        case 'yellow':
            break;
        case 'green':
            break;
        case 'blue':
            break;
        case 'violet':
            break;
        default:
            remove.push(colors.indexOf(color));
            break;
    }
})
console.log(remove);
remove.reverse();
remove.forEach(index => {
    colors.splice(index, 1);
})


console.log(colors);