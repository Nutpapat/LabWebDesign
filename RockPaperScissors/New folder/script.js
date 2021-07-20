var userShape = '';
var compShape = '';
var userScore = 0;
var compScore = 0;
var tieGames = 0;

var output = document.getElementById('stage');
output.style.fontSize = '3em'

function startGame(){    
    randomShape(); 
    checkResult();
    updateScores();
}

function resetGame(){    
    var images = document.getElementsByTagName('img')
    for (var im of images){
        im.style.opacity = 1;
    }
    userShape = '';
    compShape = '';
    userScore = 0;
    compScore = 0;    
    output.innerText = ''

    document.getElementsByTagName('th')[0].innerText = `Game #${userScore+compScore+tieGames+1}`
    document.getElementById('userScore').innerText = `#Game win: ${userScore}`
    document.getElementById('compScore').innerText = `#Game win: ${compScore}`    
   document.getElementById('resetButton').disabled = true;    

   // 5. If the game end, user MUST click reset before start the new game
}


function selectedShape(obj){    

    // 5. If the game end, user MUST click reset before start the new game

    output.innerText = ''
    document.getElementsByTagName('th')[0].innerText = `Game #${userScore+compScore+tieGames+1}`
    document.getElementById("comp_rockImg").style.opacity = 1;
    document.getElementById("comp_paperImg").style.opacity = 1;
    document.getElementById("comp_scissorsImg").style.opacity = 1;

    // 1. Write some code here to specify the userShape based on the image they clicked.

    // After user selected their shape, the start button will be activated.
    document.getElementById('startButton').disabled = false;    
}

function randomShape(){
    // 2. Write some code here to specify the compShape randomly.
}

function checkResult(){
    // 3. Write some code here to compute the result of each game, and update
    // userScore and compScore

    // After check the result of the current match, the start button will be deactivated.    
}

function updateScores(){
    // 4. Write some code here to update the scores of the whole game. 
    // If there exist a player with more than 3 scores, the game end.
}