const possibleStates = ["rock", "paper", "scissors"]
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    return possibleStates[(Math.floor(Math.random() * possibleStates.length))];
}

function getHumanChoice() {
    return (prompt("Write one of the three choices: rock, paper or scissors"));
}

function playRound(humanChoice, computerChoice) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    let result;
    if(humanSelection === computerSelection){
        result = "It's a Tie!";
    }
    else{
        switch(humanSelection){
            case "rock":
                result = (computerSelection === "scissors") ? "You Win!" : "You lose!";
                break;
            case "paper":
                result = (computerSelection === "rock") ? "You Win!" : "You lose!";
                break;
            case "scissors":
                result = (computerSelection === "paper") ? "You Win!" : "You lose!";
                break;
        }
    }
    console.log("Human choice: " + humanSelection);
    console.log("Computer choice: " + computerSelection);
    console.log("Result: " + result);
    
    if (result === "You Win!") {
        humanScore++;
    } else if (result === "You lose!") {
        computerScore++;
    }
    
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

