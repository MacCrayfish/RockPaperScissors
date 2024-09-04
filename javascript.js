let playerScore = 0;
let computerScore = 0;
let result;
let i = 1;
let computerOutcome;

function computerChoice(){
    let number = Math.floor (Math.random() * 3);
    if(number === 0){
        return "Rock";
    } else if (number === 1){
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(player, computer){
    if(player === computer){
        return "draw";
    } else if ((player === "Rock" && computer === "Scissors") || (player === "Paper" && computer === "Rock") || (player === "Scissors" && computer === "Paper")) {
        return "wins";
    } else {
        return "loses";  
    }
}

function playGame(playerOutcome){
    computerOutcome = computerChoice();
    result = playRound(playerOutcome, computerOutcome);

    console.log("Player sent " + playerOutcome);
    console.log("Computer sent " + computerOutcome);
    if(result === "wins"){
        playerScore++;
        console.log(playerOutcome + " beats " + computerOutcome + "! Congratulations!");
    } else if(result === "loses"){
        computerScore++;
        console.log(computerOutcome + " beats " + playerOutcome + "! Better luck next time.");
    }
    console.log("Player " + result);   
}

function btnPress(btn){  
    playGame(btn);
    console.log("Player Score= " + playerScore);
    console.log("Computer Score= " + computerScore);
    if(i === 5){
        if(playerScore > computerScore){
            console.log("Player Wins!");
        } else if (computerScore > playerScore){
            console.log("Computer Wins!");
        } else{
            console.log("Draw!");
        }
        playerScore = 0;
        computerScore = 0;
        i = 1;
    }

    playerScoreTxt.textContent = playerScore;
    computerScoreTxt.textContent = computerScore;
    const container = document.querySelector('#container');
    const roundState = document.createElement("h1");
    roundState.textContent = "Player " + result;
    container.appendChild(roundState);
    setTimeout(() => {
        roundState.remove()
    }, 1000);
    const computerState = document.querySelector(".computerChoice");
    computerState.textContent = "Computer Chose " + computerOutcome;
    i++;
}

const playerScoreTxt = document.querySelector("#playerScore");

const computerScoreTxt = document.querySelector('#computerScore');


const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("mouseup", () => {
    btnPress("Rock");
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("mouseup", () => {
    btnPress("Paper");
});

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("mouseup", () => {
    btnPress("Scissors");
});