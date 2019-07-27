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


//add event listener to board
board.addEventListener("click", e => {
    const cellId = e.target.getAttribute("data-cell-id");
    // check cell id is in plyerX or plyerO
    if (!(checkedCellOfPlayerX.includes(cellId) || checkedCellOfPlayerO.includes(cellId))) {
        if (playerTurn === "x") {
            e.target.innerHTML = `<i class="fa fa-close"></i>`
            checkedCellOfPlayerX.push(cellId);
            matchcheck(checkedCellOfPlayerX)
            //change palyer to O
            // playerTurn = "o";

        } else if (playerTurn === "o") {

        }
    }
})

function matchcheck(playerArr){
    for (let k =0;k<patterns.length;k++){
    	let hasIt = patterns[k].reduce((total,i)=> total && playerArr.includes(i) ,true);
        if(hasIt){
            winnerChecker(patterns[k])
        }
    }
    return false
}

function winnerChecker(patterns){
    alert("win")
}