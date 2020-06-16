# 2.1.9 - JavaScript Array methods P2

---

- Some array methods need a function as a parameter.
- These are arguably the most flexible and useful methods.

---

- `.forEach()`
- `.map()`
- `.filter()`
- `.every()`

---

### [`.forEach()`](https://www.w3schools.com/jsreF/jsref_foreach.asp)

The `.forEach()` method calls a function once for every element of the array.

```js
// Example
const words = ['The', 'large', 'shaggy', 'dog', 'barked', 'at', 'the', 'silence'];

words.forEach(function(word) {
    // do something
    console.log(word);
});

// this is common (preferred) notation, but you can declare function elsewhere:
function print(word) {
    console.log(word);
}
words.forEach(print);


```

---

### [`.map()`](https://www.w3schools.com/jsreF/jsref_map.asp)

The `.map()` method calls the provided function once for every element in the array and returns _a new array with the result_.

```js
// Example
const words = ['The', 'large', 'shaggy', 'dog', 'barked', 'at', 'the', 'silence'];

const newWords = words.map(function(word) {
    return word.toUpperCase();
});
// ['THE', 'LARGE', 'SHAGGY', etc]

```

---

### [`.filter()`](https://www.w3schools.com/jsreF/jsref_filter.asp)

The `.filter()` method returns a new array with the values that meet the requirement(s).

```js
// Example
const words = ['The', 'large', 'shaggy', 'dog', 'barked', 'at', 'the', 'silence'];

words.filter(function(word) {
    return word.length < 4;
});
//["The", "dog", "at", "the"]
```

---

### [`.every()`](https://www.w3schools.com/jsref/jsref_every.asp)

The `.every()` method checks if ALL elements in an array pass a test.

It returns `true` or `false`.
// as soon as it hits a false //

```js
// Example
const words = ['The', 'large', 'shaggy', 'dog', 'barked', 'at', 'the', 'silence'];

words.every(function(word) {
    return word.length < 4;
});
// false
```

---

On to the workshop!!