# 1.2 - CSS: Page Layout - Workshop

## Exercise 3 - NO flexbox! NO Grid!

Create an `index.html` file and a `style.css` file that reproduces the following:

![exercise-1 goal](../../assets/ex-1-goal.png)

### Reference

Your HTML should have the following structure:

```html
<!DOCTYPE html>
<html>

<head>
    <link href="style.css" rel="stylesheet" />
</head>

<body>
    <div class="container">
        
    </div>
</body>

</html>
```

- Give the `<body>` a `0` margin.
- Use HTML5 tags whenever possible.
- To ensure that the content height is at least as tall as the viewport, you will need to set the height on your `<div class="container">`
    - `min-height: 100vh`
- Use the Poppins font (google fonts) _optional_

### Properties Needed

```
margin
font-family
height
background-color
color
display
align-items
justify-content
min-height
```

You will need to use `calc()`

Example use: `min-height: calc(10vh + 200px);`
