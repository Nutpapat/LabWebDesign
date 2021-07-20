var userShape = ["rock", "paper", "scissors"];
var compShape = ["rock", "paper", "scissors"];
var userScore = 0;
var compScore = 0;
var tieGames = 0;
var comchoose = '';
var userchoose = '';

var output = document.getElementById('stage');
output.style.fontSize = '3em'

function startGame(){    
    randomShape(); 
    checkResult();
    updateScores();
}

function resetGame(){    
    location.reload();   

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

    if (obj == "user_rockImg") {
        
        document.getElementById("user_rockImg").style.opacity = 1;
        document.getElementById("user_paperImg").style.opacity = 0.2;
        document.getElementById("user_scissorsImg").style.opacity = 0.2;
    }
    if (obj == "user_paperImg") {
         document.getElementById("user_rockImg").style.opacity = 0.2;
         document.getElementById("user_paperImg").style.opacity = 1;
         document.getElementById("user_scissorsImg").style.opacity = 0.2;
    }
    if (obj == "user_scissorsImg") {
         document.getElementById("user_rockImg").style.opacity = 0.2;
         document.getElementById("user_paperImg").style.opacity = 0.2;
         document.getElementById("user_scissorsImg").style.opacity = 1;
    } 
    userchoose = obj;
    // After user selected their shape, the start button will be activated.
    document.getElementById('startButton').disabled = false;    
}

    
function randomShape(){
    var com = ["comp_rockImg","comp_paperImg","comp_scissorsImg"];
    var randomItem = com[Math.floor(Math.random()*com.length)];
    // 2. Write some code here to specify the compShape randomly.
    if (randomItem == "comp_rockImg") {
        
        document.getElementById("comp_rockImg").style.opacity = 1;
        document.getElementById("comp_paperImg").style.opacity = 0.2;
        document.getElementById("comp_scissorsImg").style.opacity = 0.2;
    }
    if (randomItem == "comp_paperImg") {
         document.getElementById("comp_rockImg").style.opacity = 0.2;
         document.getElementById("comp_paperImg").style.opacity = 1;
         document.getElementById("comp_scissorsImg").style.opacity = 0.2;
    }
    if (randomItem == "comp_scissorsImg") {
         document.getElementById("comp_rockImg").style.opacity = 0.2;
         document.getElementById("comp_paperImg").style.opacity = 0.2;
         document.getElementById("comp_scissorsImg").style.opacity = 1;
    } 
    comchoose = randomItem;
    
    document.getElementById('startButton').disabled = true;   
}

function checkResult(){
    // 3. Write some code here to compute the result of each game, and update
    // userScore and compScore
    if (userchoose == "user_rockImg" && comchoose == "comp_rockImg") {   
        alert("draw");
        tieGames += 1;
        alert("tieGames = "+tieGames);
    }
    if (userchoose == "user_rockImg" && comchoose == "comp_paperImg") {   
        alert("lose");
        compScore += 1;
        alert("compScore = "+compScore);
    }
    if (userchoose == "user_rockImg" && comchoose == "comp_scissorsImg") {   
        alert("win");
        userScore += 1;
        alert("userScore = "+userScore);
    }
    if (userchoose == "user_paperImg" && comchoose == "comp_rockImg") {   
        alert("win");
        userScore += 1;
        alert("userScore = "+userScore);
    }
    if (userchoose == "user_paperImg" && comchoose == "comp_paperImg") {   
        alert("draw");
        tieGames += 1;
        alert("tieGames = "+tieGames);
    }
    if (userchoose == "user_paperImg" && comchoose == "comp_scissorsImg") {   
        alert("lose");
        compScore += 1;
        alert("compScore = "+compScore);
    }
    if (userchoose == "user_scissorsImg" && comchoose == "comp_rockImg") {   
        alert("lose");
        compScore += 1;
        alert("compScore = "+compScore);
    }
    if (userchoose == "user_scissorsImg" && comchoose == "comp_paperImg") {   
        alert("win");
        userScore += 1;
        alert("userScore = "+userScore);
    }
    if (userchoose == "user_scissorsImg" && comchoose == "comp_scissorsImg") {   
        alert("draw");
        tieGames += 1;
        alert("tieGames = "+tieGames);
    }
    // After check the result of the current match, the start button will be deactivated. 
   
}

function updateScores(){
    // 4. Write some code here to update the scores of the whole game. 
    document.getElementById("userScore").innerHTML = "#Game win: "+userScore;
    document.getElementById("compScore").innerHTML = "#Game win: "+compScore;
    if(userScore == 3){
        document.getElementById("winword").style.opacity = 1;  
        document.getElementById("bung").style.visibility = "visible"; 
        document.getElementById('startButton').disabled = true; 
        document.getElementById('resetButton').disabled = false;
    }
    if(compScore == 3){
        document.getElementById("loseword").style.opacity = 1;
        document.getElementById("bung").style.visibility = "visible";
        document.getElementById('startButton').disabled = true;
        document.getElementById('resetButton').disabled = false;  
    }
    // If there exist a player with more than 3 scores, the game end.
}