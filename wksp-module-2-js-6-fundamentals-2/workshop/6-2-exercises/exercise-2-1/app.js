// Exercise 2.1 - The GRID
// ------------

// Create a game board.
// The CSS will, for the most part, take care of itself
// as long as you assign the right classes to the cells.

// Objectives
// - set the size of the board to a square of 600px;
// - set a number of cells per row;
// - the cells should all be square.
// - cells should have a class of 'cell'
// - cells should have and id of 'cell-#'

const board = document.getElementById('board');
board.style.width = '600px';
board.style.height = '600px';
board.style.backgroundColor = 'grey';
board.style.display = 'grid';
board.style.gridTemplateColumns = 'repeat(6, 1fr)'
board.style.gridTemplateRows = 'repeat(6, 1fr)'

function makeCells(num) {
    for (i = 0; i < num; i++){
        let cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = `cell-${i}`;
        board.appendChild(cell);
    }
}

makeCells(36);