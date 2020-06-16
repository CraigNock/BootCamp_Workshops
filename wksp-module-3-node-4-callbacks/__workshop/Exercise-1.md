# Questions

**With a partner**, answer these questions as completely as possible. Feel free to look at past lecture notes, the web, anything. 

Take the time to explain it to each other. 

The power of this exercise is in the act of _formulating_ and _explaining_ the concepts to someone else (your teammate).

## One

Run the app. Write out the steps, the _pseudo code_, required to create this app. It doesn't have to be totally accurate, or in the right order.

Only move on to the next question when you have enough detail that you would be able to start coding it yourself.

```
// Answer here
html sections:
-header
-input, sumbit button
-unordered list

js:
on submit, push input to array
refreshes page, redirects to same page
foreach of array creates list items

css:
-make the pretty

```

## Two - `server.js`

Take a look at the `server.js` file.

We have a new module in there, `body-parser` that is required on line `4`. What is it for? What is its use-case? What other lines are related to this module?

_The NPM site might be a good place to start. Feel free to provide links as relevant._

```
// Answer here
middlewar that allows us to better grab form information through .post methods from other pages.
parses the req.body for information we want
https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters
https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express
```

## Three - `server.js`

Look at lines `23` and `24`. Explain the methods used. How are they different? What are the usecases for each?

```
// Answer here
.get and .post work similarly in that you can send or render in their functions. However .post is used to target form data and manipulate it

```

## Four - `server.js`

Line `6`. That's new. What do you think it's for?


```
// Answer here
the handlers are all stored in a separate js file (cleaner). This line allows us to access all these handlers through the object they are exported through on the handler page.
```

## Five - `handlers.js`

Explain line `1`. Where, why and how is `items` being used?

```
// Answer here
`items` is the array being populated by the form-data handler(via the todoinput) and in turn being used to populate the unordered list on the homepage.
It being 'global' (to the functions) enables this and stops the list being cleared on casual refresh.
```

## Six - `handlers.js`

Why is there `redirect` on line `11`;

```
// Answer here
The form data handler does not render a page, it manipulates data and then sends us back to the homepage, that can access the newly manipulated data to "refesh" itself.
there needs to be an endpoint.
``` 

## Seven - `handlers.js`

The `handle404` function is a more complex than we've seen thus far, what is the extra functionality for?

```
// Answer here
Breaks down what kind of error has occured.(at what level) 
As we are using .post . Helps us distinguish whether there is an error in the front or back end of operations.
```

## Eight - `ejs`

Take a look at `homepage.ejs` and `todoInput.ejs`. What is happening in there? Explain line-by-line...

```
// Answer here
Homepage:
-including header partial
-creating a container and including the form partial (todoinput) in it
-creating another container and 
-within that: using a loop on the item array to create a list. (each list item is given a recognisable class name ralate to the list class)
- including the footer partial

todoinput:
-creates a form defining the method as POST to allow .post to access it, 
action: is set to refer to what is done when submitting (accesses a url)
-form is given an appropriate label
-input field is created, only passes information inputted as text. It is given a name that is used to target that input: 'item'. 
Also a placeholder is defined for screen readers.
-A submit button is added to the form

```

## Nine - `styles.scss`

What are lines `2` to `7` for this file? Where are these values being used? Take a look at `_homepage.scss` as well? What do you notice?

```
// Answer here
variables are created here that can be used to easily refer to throughout the scss. i.e a consistent color scheme.
```

## Ten - `_homepage.scss`

Line `16`. See if by searching the Sass documentation, you can determine what _exactly_ is going on here. That `#{}` notation very specific to this use-case. Why?

```
// Answer here
this is just syntax for sass interpolation.
allows a calculation to be done and then passed as a value
```







