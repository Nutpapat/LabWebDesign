var turn = 'O'
var win = false;
var winner = '';
var blocks = document.querySelectorAll('.table-block');
var turnObject = document.getElementById('turn');

newGame();

for (var block of blocks) {
    // 1. Modify the code here to check click event on each block
    block.onclick = function (event) {
        // modify the condition here to continue the game play as long as there is no winner
        if (event.target.innerHTML == "" && !win) {
            // 4. Modify the code here to check whether the clicking block is avialable.            
            event.target.innerHTML = turn;
            if (turn == "O") {
                event.target.style.backgroundColor = "Salmon"
            } else {
                event.target.style.backgroundColor = "Salmon"
            }
            event.target.style.color = "white";
            checkResult();
        }
    }
}

function check3Res(a, b, c) {
    if (a.innerText == b.innerText && b.innerText == c.innerText && AllFull([a, b, c])) {
        return true;
    }
    return false;
}

function AllFull(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i].innerText == "")
            return false
    }
    return true;
}

function AddSpace(a) {
    for (let i = 0; i < a.length; i++) {
        a[i].innerText = "";
    }
    return true;
}

function checkResult() {
    console.log((check3Res(A0, A1, A2)))
    // 2. Modify the code here to check whether someone win the game
    if (
        (check3Res(A0, A1, A2) || check3Res(B0, B1, B2) || check3Res(C0, C1, C2)) ||
        (check3Res(A0, B1, C2) || check3Res(C0, B1, A2)) ||
        (check3Res(A0, B0, C0) || check3Res(A1, B1, C1) || check3Res(A2, B2, C2))
    ) {
        //Game end and someone wins the game
        win = true;
        winner = turn;
        turnObject.innerHTML = "Game win by " + winner;
    } else if (
        ((check3Res(A0, A1, A2) && check3Res(B0, B1, B2) && check3Res(C0, C1, C2)) &&
            (check3Res(A0, B1, C2) && check3Res(C0, B1, A2)) &&
            (check3Res(A0, B0, C0) && check3Res(A1, B1, C1) && check3Res(A2, A2, A2))) == false
        &&
        (AllFull([A0, A1, A2, B0, B1, B2, C0, C1, C2]))
    ) {
        // Game end and no-one wins the game
        turnObject.innerHTML = "Game draw";
    } else {
        // The game is on going
        turn = turn === 'O' ? 'X' : 'O';
        turnObject.innerHTML = "Turn: " + turn;
    }
}
function newGame() {
    turn = 'O';
    turnObject.innerHTML = "Turn: " + turn;
    winner = '';
    win = false;
    // 3. Modify the code here to reset the game to initial state
    AddSpace([A0, A1, A2, B0, B1, B2, C0, C1, C2]);
}
