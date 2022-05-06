var items = ["Rock", "Paper", "Scissors"];
var playerPoints = 0;
var computerPoints = 0;
var winnerBool = false;
const playerP = document.querySelector("#playerPoints");
const computerP = document.querySelector("#ComputerPoints");
const output = document.querySelector("#output");
const winnerText = document.querySelector("#winner");
const itemsBtn = document.querySelector("#items");
const reset = document.querySelector("#reset");

playerP.textContent = playerPoints;
computerP.textContent = computerPoints;
winnerText.textContent = "Not yet";

function restart() {
    playerPoints = 0;
    computerPoints = 0;
    itemsBtn.classList.toggle("notActive");
    reset.classList.toggle("notActive");
    output.textContent = "";
    winnerText.textContent = "Not yet";
    winnerBool = false;
}

function computerPlay() {
   return items[Math.floor(Math.random()*items.length)];
}

function playRound(playerSelection, computerSelection) {
    var playerWin = false;
    var draw = false;
    var player = playerSelection.toLowerCase();
    var computer = computerSelection.toLowerCase();

    if(player === computer) {
        draw = true
    } else if (player === "rock" && computer === "scissors") {
        playerWin = true;
    } else if (player === "scissors" && computer === "paper") {
        playerWin = true;
    } else if (player === "paper" && computer === "rock") {
        playerWin = true;
    }

    if(draw){
        return "It's a draw! " + playerSelection + " and " + computerSelection;
    } else if (playerWin) {
        this.playerPoints++;
        if(playerPoints >= 5){
            endgame("player");
        }
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } else {
        this.computerPoints++;
        if(computerPoints >= 5){
            endgame("computer");
        }
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}

function playerPlay(item) {
    output.textContent = playRound(item, computerPlay());
    playerP.textContent = playerPoints;
    computerP.textContent = computerPoints;
}

function endgame(winner) {
    if ( winner == "player") {
        winnerText.textContent = "The human wins! Great job";
    } else {
        winnerText.textContent = "The machine wins! now you're the slave :/";
    }
    itemsBtn.classList.toggle("notActive");
    reset.classList.toggle("notActive");
}


