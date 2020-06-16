# 2.7.1 - JS - array.sort()

---

## .sort() - without parameters

```js
const characters = ['Rick', 'Morty', 'Summer', 'Beth', 'Jerry'];

characters.sort();

// outcome?
//goes by the ascii codes, capitals are different, not reeealy alphabetical.
//so it'll sort alphabetical as long as all strings are uppercase or all are lowercase
```

---

This method will sort the array items by their `unicode` numbers.

(sort of alphabetical...)

---

This will work for _most_ cases, but what about when it doesn't?

---

### Example

This doesn't work as _expected_.

```js
const numbers = [123, 13, 12, 6, 76, 0, 9];

numbers.sort();

// outcome?
0, 12 123 13 6 76 9
```

---

## Solution: Define out own sorting function!

---

## .sort() - with a function parameters

- This method can accept a function as a parameter.
- This function acts as a sorting function.

---

```js
const numbers = [123, 13, 12, 6, 76, 0, 9];
//puts lower one at lower index (smallest to biggest)
numbers.sort((a, b) => a - b)

// outcome?
0 , 6 , 9, 12 etc

//biggest to smallest
numbers.sort((a, b) => a - b)


```

---

