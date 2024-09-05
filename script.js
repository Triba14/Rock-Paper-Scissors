const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score');
const roundResult = document.getElementById('game-result');
const resultMessage = document.getElementById('result-message')
const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');
const resetButton = document.getElementById('reset-button');

let userScoreValue = 0;
let computerScoreValue = 0;

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    }
    if (
        (userChoice === 'Rock' && computerChoice === 'Scissors') ||
        (userChoice === 'Paper' && computerChoice === 'Rock') ||
        (userChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        return 'You win!🧑';
    } else {
        return 'Computer wins!🤖';
    }
}

function playRound(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    if (result === 'You win!🧑') {
        userScoreValue ++;
        userScore.textContent = `User points: ${userScoreValue}`;
    } else if (result === 'Computer wins!🤖') {
        computerScoreValue ++;
        computerScore.textContent = `Computer points: ${computerScoreValue}`;
    }

    roundResult.textContent = `You chose ${userChoice}, Computer chose ${computerChoice}. ${result}`;
    checkGameOver();
}

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

function checkGameOver() {
    if (userScoreValue === 5) {
        resultMessage.textContent = '🎉Congratulations! You win!🏆';
        disableButtons();
    } else if ( computerScoreValue === 5) {
        resultMessage.textContent = 'Computer wins!🙁 Try again!'
        disableButtons();
    }
}

function reset() {
    userScoreValue = 0,
    computerScoreValue = 0
    userScore.textContent = 'User points: 0';
    computerScore.textContent = 'Computer points 0';
    roundResult.textContent = '';
    resultMessage.textContent = '';
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}

rockButton.addEventListener('click', function() {
    playRound('Rock');
});

paperButton.addEventListener('click', function() {
    playRound('Paper');
});

scissorsButton.addEventListener('click', function() {
    playRound('Scissors');
});

resetButton.addEventListener('click', function() {
    reset();
})