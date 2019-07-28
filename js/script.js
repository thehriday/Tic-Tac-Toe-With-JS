
//select board
const board = document.querySelector(".board");
//select marge line
const mergeLine = document.querySelector(".merge");
//select winning sound
const winningSound = document.querySelector(".winning-sound")



// pattern
const patterns = [
    [1, 2, 3],
    [1, 5, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 5, 7],
    [3, 6, 9],
    [4, 5, 6],
    [7, 8, 9]
];
let playerTurn = 'x';
const checkedCellOfPlayerX = [];
const checkedCellOfPlayerO = [];

let hasWinner = false;

//add event listener to board
board.addEventListener("click", e => {
    const {
        className
    } = e.target
    const cellId = Number(e.target.getAttribute("data-cell-id"));
    const checkClickBefore = !(checkedCellOfPlayerX.includes(cellId) || checkedCellOfPlayerO.includes(cellId))
    // check cell id is in plyerX or plyerO 
    if (className == "cell" && checkClickBefore) {
        if (playerTurn === "x") {
            e.target.innerHTML = `<i class="fa fa-close"></i>`;
            checkedCellOfPlayerX.push(cellId);
            matchCheck(checkedCellOfPlayerX);
            //change player to O
            playerTurn = "o";
            document.querySelector('.turn').innerHTML = playerTurn.toUpperCase();

        } else if (playerTurn === "o") {
            e.target.innerHTML = `<i class="fa fa-circle-o"></i>`
            checkedCellOfPlayerO.push(cellId);
            matchCheck(checkedCellOfPlayerO)
            //change player to X
            playerTurn = "x";
            document.querySelector('.turn').innerHTML = playerTurn.toUpperCase();
        }
        drawMatch()
    }
});

function matchCheck(playerArr) {
    for (let k = 0; k < patterns.length; k++) {
        let hasIt = patterns[k].reduce((total, i) => total && playerArr.includes(i), true);
        if (hasIt) {
            winnerChecker(patterns[k])
        }
    }
    return false
}

function winnerChecker(patterns) {
    // we got winner
    hasWinner = true;
    // user will not be able to click any more
    board.style = "pointer-events: none;";
    // play winning sound
    winningSound.play()
    const patternNum = patterns.join("")
    // add line and line color css class
    mergeLine.className += ` pattern-animation pattern${patternNum} player${playerTurn.toUpperCase()}Color`;

    let keyframes = `@keyframes widthIncress{
                        from{ width: 0px ;}
                        to{ width:${mergeLine.clientWidth}px; }
                    }`
    // add keyframes to body
    document.querySelector(".insertKeyframe").innerHTML += keyframes;
    setTimeout(() => {
        //fate out for board
        document.querySelector(".turn-and-board").classList.add("fade-out")
        //winner icon 
        const winnerIcon = `<i class="fa fa-${playerTurn == 'o' ? 'close' : 'circle-o' }"></i>`;
        // winner or draw
        document.querySelector(".winnerState").innerText = "WINNER!";
        document.querySelector(".winner-icon").innerHTML = winnerIcon
        // fade in for winner
        document.querySelector(".show-winner").classList.add("fade-in")

    }, 1000)
}

//restart game

document.querySelector(".restart").addEventListener("click", () => location.reload())

// match draw
function drawMatch() {
    const lengthOfX = checkedCellOfPlayerX.length;
    if (lengthOfX === 5 && !hasWinner) {
        setTimeout(() => {
            //fate out for board
            document.querySelector(".turn-and-board").classList.add("fade-out")
            //winner icon 
            const winnerIcon = '<i class="fa fa-close"></i> <i class="fa fa-circle-o"></i>';
            // winner or draw
            document.querySelector(".winnerState").innerText = "Match Draw!";
            document.querySelector(".winner-icon").innerHTML = winnerIcon
            // fade in for winner
            document.querySelector(".show-winner").classList.add("fade-in")
    
        }, 1000)
    }
}
