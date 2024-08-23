
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

function playerChoice(choiceLowercase){
    if(choiceLowercase === "rock"){
        return "Rock";
    } else if(choiceLowercase === "paper"){
        return "Paper";
    } else if (choiceLowercase === "scissors"){
        return "Scissors";
    } else {
        console.log("Please input a valid option");
        return null;
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

function playGame(){
    let choice = prompt("Rock Paper or Scissors?");
    let choiceLowercase = choice.toLowerCase();
    let playerOutcome = playerChoice(choiceLowercase);
    let computerOutcome = computerChoice();
    let result = playRound(playerOutcome, computerOutcome);

    if(playerOutcome !== null){
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
    } else {
        console.log("Invalid");
    }
        
}
let playerScore = 0;
let computerScore = 0;


for(i = 1; i < 6; i++){  
    let roundOutcome = playGame();
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
    }
}
        

