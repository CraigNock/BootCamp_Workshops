# 2.1.7 - JavaScript Array methods P1

---

- Arrays have a bunch of methods attached to them.
- Many of which you'll use on a daily basis.

---

## Common Array methods

- `.concat()`
- `.join()`

---

### [`.concat()`](https://www.w3schools.com/jsreF/jsref_concat_array.asp)

The `.concat()` method returns a _new_ array with the values of two existing arrays.

```js
// Example
const arrayOne = ['think', 'dream', 'learn', 'write'];
const arrayTwo = ['thought', 'dreams', 'knowledge', 'truth'];

let newArray = arrayOne.concat(arrayTwo);

```

---

### [`.join()`](https://www.w3schools.com/jsreF/jsref_join.asp)

The `.join()` method returns the array as a string.

```js
// Example
const lexicon = ['The', 'large', 'shaggy', 'dog', 'barked', 'at', 'the', 'silence'];

let sentence = lexicon.join();
// "The,large,shaggy,dog, etc"

lexicon.join(' ');
// "The large shaggy dog etc"

***default join is a comma, can assign a space etc
.toString() you cannot have anything, but comma



```

---

And there are so many more.

---

## Exercise

Let's dip into the internet and see if we can learn all of these methods collectively.

1. `.includes()`, `.slice()`
2. `.indexOf()`, `.push()` 
3. `.pop()`, `.sort()`
4. `.shift()`, `.unshift()`
5. `.reverse()`, `.lastIndexOf()`
6. `.splice()`, `.toString()`

- Split into teams of 2.
- Take given methods
    - find an explanation/definition, then write your own.
    - create two examples of each method in use. Be creative. 😛

.includes()

Checks if an array contains a specified element. Returns true or false.
```js
let array = [1, 'two', true];
array.includes('two');
// true
array.includes('true')
//false

```


slice()

takes elements from an array and returns them in a new array. Does not affect original.

Can specify a start and end for elements to extract. 

NOTE: Does not include end argument.
If start specified, but not end; will take to end of array.


```js
let array = [1, 'two', true, 'blue'];
array.slice(1,3);
// ['two', true]
array.slice(2);
//[true, 'blue']

```





---

[Next lecture: Functions](../lecture-8-functions)