
function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let indx = Math.floor(Math.random() * 3);

    return options[indx];
}

function getHumanChoice() {
    let humanChoice = prompt("Your selection: ");
    const options = ['rock', 'paper', 'scissors'];
    if (options.indexOf(humanChoice.toLowerCase()) < 0) {
        throw "Invalid selection. Please enter 'rock,' 'paper', or 'scissors.'"
    } else {
        return humanChoice;
    }
}

function playRound(humanChoice, computerChoice) {
    let hChoice = humanChoice.toLowerCase();
    let cChoice = computerChoice.toLowerCase();

    if (hChoice === 'rock' && cChoice === 'rock') {
        console.log("It's a tie. Both players chose 'rock.'");
    } else if (hChoice === 'rock' && cChoice === 'paper') {
        console.log("You lose. Paper beats rock.");
        return "computer";
    } else if (hChoice === 'rock' && cChoice === 'scissors') {
        console.log("You win! Rock beats scissors.");
        return "human";
    } else if (hChoice === 'paper' && cChoice === 'paper') {
        console.log("It's a tie. Both players chose 'paper.'");
    } else if (hChoice === 'paper' && cChoice === 'scissors') {
        console.log("You lose. Scissors beats paper.");
        return "computer";
    } else if (hChoice === 'paper' && cChoice === 'rock') {
        console.log("You win! Paper beats rock.");
        return "human";
    } else if (hChoice === 'scissors' && cChoice === 'scissors') {
        console.log("It's a tie. Both players chose 'scissors.'");
    } else if (hChoice === 'scissors' && cChoice === 'rock') {
        console.log("You lose. Rock beats scissors.");
        return "computer";
    } else if (hChoice === 'scissors' && cChoice === 'paper') {
        console.log("You win! Scissors beats paper.");
        return "human";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 6; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        let winner = playRound(humanChoice, computerChoice);
        if (winner === 'human') {
            humanScore += 1;
        } else if (winner === 'computer') {
            computerScore += 1;
        }
        console.log(`Your score: ${humanScore}`);
        console.log(`COM's score: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("You've won!")
    } else if (computerScore > humanScore) {
        console.log("You lost!");
    } else if (computerScore === humanScore) {
        console.log("It was a tie!")
    }

    console.log(`Final score: ${humanScore} to ${computerScore}.`)
}

playGame();
