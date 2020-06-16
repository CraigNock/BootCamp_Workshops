# 2.7.2 - JS - Object Methods

---

## Situation

You have an object that you _need_ to iterate over.

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }
```

---

## [Object.keys()](https://www.geeksforgeeks.org/object-keys-javascript/)

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }

```

Now I am interested in the average age of my friends.

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }

const friendNames = Object.keys(friendsAge);

friendNames.forEach(friend => {
    //logs all the ages
    ///need to use []
    console.log(friendsAge[friend]);
})

```

---

## [Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }

//same deal with values

//[32, 60, 14, 35]
const age = Object.values(friendsAge);

//then can do operations etc on the values (eg average)
//or determining if value exists

```


other thing:arrays of object (common)
```js
const friends = [
    {name : 'Kevin', age : 32},
    {name : 'Rick', age : 60},
    {name : 'Morty', age : 14},
    {name : 'Jerry', age : 35},
]

//to sort these (has to be numbers)
friends.sort((a, b) => a.age - b.age);

//probably ways to sort by letter

```

---