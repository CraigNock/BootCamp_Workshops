// Exercise 6
// -------------------

var favoriteDessert = {
    scott: 'brownies',
    fred: 'tiramisu',
    lisa: 'chocolate cake',
    riley: 'ice-cream',
    sunny: 'cheese cake',
    john: 'ice-cream',
    beth: 'cheese cake',
    summer: 'ice-cream',
    morty: 'apple pie',
    rick: 'brownies',
    andrew: 'cheese cake',
    jerry: 'rhubard pie',
    'jean-luc': 'cheese cake',  
    tiffany: 'waffles',
    melissa: 'profiteroles',
};

// Above is an object with the results of a poll.
// Write a script that outputs the following:

// A)
// the desserts ranked from most popular to least popular.
// e.g. 1. <DESSERT_NAME>
//      2. <DESSERT_NAME>
//      ...

let desserts = Object.values(favoriteDessert)
// console.log(desserts);

let uniqueDess = [];

desserts.map(dish => {
    if(!uniqueDess.includes(dish)){
        uniqueDess.push(dish);
    }
})
console.log(uniqueDess);


let dessertCount = [];


uniqueDess.forEach(dessert =>{
    let count = 0;
    for (i=0 ; i<desserts.length ; i++){
        if (desserts[i] === dessert){
            
            count ++;
        }
    }
    // console.log(`${count} x ${dessert}`);
    // let entry = {type:dessert, amount:count};
    // if ( !dessertCount.includes(entry.type)){
    dessertCount.push({type:dessert, amount:count})};
}

console.log(dessertCount);


//sort by amount
// dessertCount.sort((a, b) (a.thing > b.thing) ? 1 : -1); 
// dessertCount.reverse();
// console.log(dessertCount);

dessertCount.for (i=0 ; i < dessertCount.length; i++) {
    console.log(`#${i+1}${dessertCount[i].type}`);
})

// desserts.forEach(item => {
//     desserts.forEach(type => {
//         if (item === type){
            
//         }
//     })
// })







// B)
// The names of those that said the same desserts. Output the list in
// order by dessert.
// e.g. - brownies: <NAME>, <NAME>, ...
//      - ice-cream: <NAME>, <NAME>, <NAME>, ...
//      ...
