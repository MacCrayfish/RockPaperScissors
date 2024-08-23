
function computerChoice(){
    let number = Math.floor (Math.random() * 3);
    if(number === 0){
        return "rock";
    } else if (number === 1){
        return "paper";
    } else {
        return "scissors";
    }
}

function playerChoice(lowercase){
    if(lowercase === "rock"){
        return "rock";
    } else if(lowercase === "paper"){
        return "paper";
    } else if (lowercase === "scissors"){
        return "scissors";
    } else {
        console.log("Please input a valid option");
        return null;
    }
}

function playRound(player, computer){
    if(player === computer){
        return "draw";
    } else if ((player === "rock" && computer === "scissors") || (player === "paper" && computer === "rock") || (player === "scissors" && computer === "paper")) {
        return "win";
    } else {
        return "lose";
    }
}

let playerScore = 0;
let computerScore = 0;

let choice = prompt("Rock Paper or Scissors?");
let choiceLowercase = choice.toLowerCase();
let playerOutcome = playerChoice(choiceLowercase);
let computerOutcome = computerChoice();

if(playerOutcome !== null){
    console.log(playerChoice(choiceLowercase));
    console.log(computerOutcome);
    let result = playRound(playerOutcome, computerOutcome);
    console.log(result);
} else {
    console.log("Invalid");
}
