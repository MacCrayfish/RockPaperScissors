
function computerChoice(){
    return Math.floor (Math.random() * 3);
}

function playerChoice(lowercase){
    if(lowercase === "rock"){
        return 0;
    } else if(lowercase === "paper"){
        return 1;
    } else if (lowercase === "scissors"){
        return 2;
    } else {
        console.log("Please input a valid option");
    }
}

function playRound(player, computer){
    if(player === computer){
        return "draw";
    } else if ((player === 0 && computer === 2) || (player === 1 && computer === 0) || (player === 2 && computer === 1)) {
        return "win";
    } else {
        return "lose";
    }
}
let playerScore = 0;
let computerScore = 0;
let choice = prompt("Rock Paper or Scissors?");
let lowercase = choice.toLowerCase();




console.log(playerChoice(lowercase));
console.log(computerChoice());
console.log(playRound(playerChoice, computerChoice));