// Exercise 2.2 - the Custom Grid
// ------------

// Use the grid code you wrote in 2.1

// Objectives
// Allow the user to create cells on the board based on values he/she inputs.
// - Ask the user the number of ROWS and COLUMNS
// - Use those values to generate a grid

// Hints
// - use the 'blur' event
// - one event listener per input

// If you need extra hints, see somebody... :)

const board = document.getElementById('board');
board.style.width = '600px';
board.style.height = '600px';
board.style.backgroundColor = 'grey';
board.style.display = 'grid';
// board.style.gridTemplateColumns = 'repeat(1, 1fr)'
// board.style.gridTemplateRows = 'repeat(1, 1fr)'

function makeCells() {
    let rowsI = document.getElementById('rows-input');
    let columnsI = document.getElementById('columns-input');
    let cellAmount = rowsI.value * columnsI.value;
    console.log(rowsI.value);
    console.log(columnsI.value);
    board.style.gridTemplateRows = `repeat(${rowsI.value}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${columnsI.value}, 1fr)`;
    for (i = 0; i < cellAmount; i++){
        let cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = `cell-${i}`;
        board.appendChild(cell);
    }
}



document.getElementById('rows-input').addEventListener('blur', makeCells);
document.getElementById('columns-input').addEventListener('blur', makeCells)