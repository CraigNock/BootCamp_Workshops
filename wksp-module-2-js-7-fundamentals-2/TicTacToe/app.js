// tic tac toe
//indicate which players turn
const board = document.querySelector('#board');
const player1 = document.querySelector('#player-1');
const player2 = document.querySelector('#player-2');

const PLAYER1ICON = 'X'
const PLAYER2ICON = 'O'

let counter = 0;

const game = [
    0, 1, 2,
    3, 4, 5,
    6, 7, 8
]

//game start with player 1
let currentPlayer = '1';
player1.classList.add('active');


function win() {
    console.log (currentPlayer);
    board.removeEventListener('click', handleClick);
    alert(`Player ${currentPlayer} Wins!`); //don't use alerts
}

function verifyWin() {
    //ROWS
    if (game[0] === game[1] && game[1] === game[2]){win()};
    if (game[3] === game[4] && game[4] === game[5]){win()};
    if (game[6] === game[7] && game[7] === game[8]){win()};
    // COLUMNS
    if (game[0] === game[3] && game[3] === game[6]){win()};
    if (game[1] === game[4] && game[4] === game[7]){win()};
    if (game[2] === game[5] && game[5] === game[8]){win()};
    //DIAGONALS
    if (game[0] === game[4] && game[4] === game[8]){win()};
    if (game[2] === game[4] && game[4] === game[6]){win()};

}

const togglePlayer = () => {
    //turnery operator? if ?then :else (good for toggles)
    currentPlayer = (currentPlayer === '1') ? '2' : '1';
    player1.classList.toggle('active');
    player2.classList.toggle('active');
}

function handleClick(event) {
    const cell = event.target.id;
    const currentCellDiv = document.getElementById(cell);
    const icon = (currentPlayer === '1') ? PLAYER1ICON : PLAYER2ICON;
    let cellId = cell.charAt(cell.length - 1)
    
    if (typeof(game[cellId]) === 'number') {
        currentCellDiv.innerText = icon;
        //add value to game array
        // game.splice(1,(cell[5]),icon);
        //or 
        game[cellId] = icon;
        counter ++;
        if(counter < 9) {
            verifyWin();
            togglePlayer();
        } else {
            alert('DRAW'); //really; don't use alerts.
        };
    }
}


board.addEventListener('click', handleClick);


//2. cells need to clickable (buttons harder to style)
    //clicking adds a value (x or o)
    //*once ther is a value; cannot change
// 3. clear board (optional, refresh works for now)
//4. 2 players
    //flag/variable for current player
    //each player assigned 'x' or 'o'
//5. create array of current cell values;
    //refresh on each change
//6. create all win conditions
    //