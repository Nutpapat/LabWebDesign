var userShape = '';
var compShape = '';
var userScore = 0;
var compScore = 0;
var tieGames = 0;

var isPlay = true;

var output = document.getElementById('stage');
output.style.fontSize = '3em'

function startGame() {
    randomShape();
    checkResult();
    updateScores();
}

function resetGame() {

    isPlay = true;

    var images = document.getElementsByTagName('img')
    for (var im of images) {
        im.style.opacity = 1;
    }
    userShape = '';
    compShape = '';
    userScore = 0;
    compScore = 0;
    output.innerText = ''

    document.getElementsByTagName('th')[0].innerText = `Game #${userScore + compScore + tieGames + 1}`
    document.getElementById('userScoreText').innerText = `#Game win: ${userScore}`
    document.getElementById('compScoreText').innerText = `#Game win: ${compScore}`
    document.getElementById('resetButton').disabled = true;

    // 5. If the game end, user MUST click reset before start the new game
}


function selectedShape(obj) {

    // 5. If the game end, user MUST click reset before start the new game
    if (isPlay) {
        output.innerText = ''
        document.getElementsByTagName('th')[0].innerText = `Game #${userScore + compScore + tieGames + 1}`
        document.getElementById("comp_rockImg").style.opacity = 1;
        document.getElementById("comp_paperImg").style.opacity = 1;
        document.getElementById("comp_scissorsImg").style.opacity = 1;

        // 1. Write some code here to specify the userShape based on the image they clicked.
        let user = document.getElementsByClassName("user");
        for (let i = 0; i < user.length; i++) {
            user[i].style.opacity = 0.2;
        }
        obj.style.opacity = 1;
        userShape = obj.id.substring(5);
        // After user selected their shape, the start button will be activated.
        document.getElementById('startButton').disabled = false;
    }
}

function randomShape() {
    // 2. Write some code here to specify the compShape randomly.
    let randomNumber = Math.floor(Math.random() * 3);
    let comp = document.getElementsByClassName("comp");
    for (let i = 0; i < comp.length; i++) {
        comp[i].style.opacity = 0.2;
    }
    comp[randomNumber].style.opacity = 1;
    compShape = comp[randomNumber].id.substring(5);
}

function checkResult() {
    // 3. Write some code here to compute the result of each game, and update
    // userScore and compScore
    if ((userShape == "scissorsImg" && compShape == "paperImg") ||
        (userShape == "paperImg" && compShape == "rockImg") ||
        (userShape == "rockImg" && compShape == "scissorsImg")) {
        userScore++;
    } else if ((compShape == "scissorsImg" && userShape == "paperImg") ||
        (compShape == "paperImg" && userShape == "rockImg") ||
        (compShape == "rockImg" && userShape == "scissorsImg")) {
        compScore++;
    }
    // After check the result of the current match, the start button will be deactivated.
    document.getElementById('startButton').disabled = true;
}

function updateScores() {
    // 4. Write some code here to update the scores of the whole game. 
    // If there exist a player with more than 3 scores, the game end.
    userScoreText.innerText = "#Game win: " + userScore;
    compScoreText.innerText = "#Game win: " + compScore;

    if (userScore == 3) {
        output.innerText = "Congratulation, You WIN!!!";
    } else if (compScore == 3) {
        output.innerText = "Sorry, You Lose.";
    }

    if (userScore == 3 || compScore == 3) {
        document.getElementById('resetButton').disabled = false;
        isPlay = false;
    }

}