//select board
const board = document.querySelector(".board");

// patten
const patterns = [
    [1, 2, 3],
    [1, 5, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 5, 7],
    [3, 6, 9],
    [4, 5, 6],
    [7, 8, 9],
];
let playerTurn = 'x';
const checkedCellOfPlayerX = [];
const checkedCellOfPlayerO = [];


//add event listener to borad
board.addEventListener("click", e => {
    const cellId = e.target.getAttribute("data-cell-id");

})

// function
const playerClick = cellId => {
    if (playerTurn == "x") {

    } else if (playerTurn == "0") {

    }
}

