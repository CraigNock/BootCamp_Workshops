// Exercise 1.2
// ----------

// STEP 1
// Reimplement the functionality of 1.1 (Try to NOT look at your previous solution)
// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css)

// STEP 2
// This time the buttons should toggle.
// Meaning if the user clicks on them a second time, it should go back to initial state.
// initial button color is 'gold'

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referencable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)


document.querySelector('#btn-1').style.backgroundColor = 'gold'
document.querySelector('#btn-2').style.backgroundColor = 'gold'
document.querySelector('#btn-3').style.backgroundColor = 'gold'
document.querySelector('#btn-4').style.backgroundColor = 'gold'

function handleClick(e) {
    console.log (e.target.id);
    let pressed = e.target;
    let bckCol = pressed.style.backgroundColor;
    console.log(bckCol)
    switch (pressed.id) {
        case 'btn-1':
            if (bckCol === 'gold'){
                pressed.style.backgroundColor = 'transparent';
                pressed.style.color = 'transparent';
                pressed.style.borderColor = 'transparent';
            } else { 
                pressed.style.backgroundColor = 'gold';
                pressed.style.color = 'black';
                pressed.style.borderColor = 'grey';
            }
            break;
        case 'btn-2':
            if (bckCol === 'gold'){
                pressed.style.backgroundColor = 'crimson';
            } else { 
                pressed.style.backgroundColor = 'gold';
            }
            break;
        case 'btn-3':
            if (bckCol === 'gold'){
                pressed.style.backgroundColor = 'lightblue';
            } else { 
                pressed.style.backgroundColor = 'gold';
            }
            break;
        case 'btn-4':
            if (pressed.className === 'jitters'){
                pressed.classList.remove('jitters');
            } else { 
                pressed.classList.add('jitters');
            }
            break;
        default:
            break;
    }
}



document.querySelector('.buttons').addEventListener('click', handleClick)