const possibleStates = ["rock", "paper", "scissors"]
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    return possibleStates[(Math.floor(Math.random() * possibleStates.length))];
}

function getHumanChoice() {
    return (prompt("Write one of the three choices: rock, paper or scissors"));
}

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    let result;
    if(humanChoice === computerChoice){
        result = "It's a Tie!";
    }
    else{
        switch(humanChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "You Win!" : "You lose!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You Win!" : "You lose!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You Win!" : "You lose!";
                break;
        }
    }
    console.log("Human choice: " + humanChoice);
    console.log("Computer choice: " + computerChoice);
    console.log("Result: " + result);
    
    if (result === "You Win!") {
        humanScore++;
    } else if (result === "You lose!") {
        computerScore++;
    }
    
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

