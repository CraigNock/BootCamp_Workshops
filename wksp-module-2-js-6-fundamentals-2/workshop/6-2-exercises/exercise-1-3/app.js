// Exercise 1.3
// ----------

// STEP 1
// Reimplement the functionality of 1.1 and 1.2
// - button one disappears
// - button two turns 'crimson'
// - button three turns 'lightblue'
// - button four starts shaking... (animation provided in styles.css)
// - This time the buttons should toggle.
// - Meaning if the user clicks on them a second time, it should go back to initial state.
// - initial button color is 'gold'
// - initial opacity is '100'

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// STEP 2
// The new RESET button should reset all of the buttons to their original state.

// HINT:
// to remove the 'jitters' class, check the length of the classList.





function resetButts(){
    for (i=1 ; i<5 ; i++){
        let butts = document.querySelector(`#btn-${i}`);
        butts.style.backgroundColor = 'gold';
        butts.style.opacity = '100';
        butts.classList.remove('jitters');
    }
}

function toggleColor(id, color) {
    let togButt = document.getElementById(id);
    let currentCol = togButt.style.backgroundColor;
//accssing/changing the live value, current color is just the value taken at the time defined
    togButt.style.backgroundColor = (currentCol === 'gold') ? `${color}` : 'gold';
}


function handleClick(e) {
    let buttId = e.target.id;
    console.log(buttId);

    switch (buttId) {
        case 'btn-1':
            if (e.target.style.opacity !== '100'){
                e.target.style.opacity = '100';
            } else {
                e.target.style.opacity = '0'
            }
            break;
        case 'btn-2':
            toggleColor(buttId, 'crimson');
            break;
        case 'btn-3':
            toggleColor(buttId, 'lightblue');
            break;
        case 'btn-4':
            document.getElementById(buttId).classList.toggle('jitters');
            break;
        case 'reset':
            resetButts();
            break;
        default:
            break;
    }
}

resetButts();

document.querySelector('.buttons').addEventListener('click', handleClick)