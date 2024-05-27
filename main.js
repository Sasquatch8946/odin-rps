const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

playRound(humanChoice, computerChoice);

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
    } else if (hChoice === 'rock' && cChoice === 'scissors') {
        console.log("You win! Rock beats scissors.");
    } else if (hChoice === 'paper' && cChoice === 'paper') {
        console.log("It's a tie. Both players chose 'paper.'");
    } else if (hChoice === 'paper' && cChoice === 'scissors') {
        console.log("You lose. Scissors beats paper.");
    } else if (hChoice === 'paper' && cChoice === 'rock') {
        console.log("You win! Paper beats rock.");
    } else if (hChoice === 'scissors' && cChoice === 'scissors') {
        console.log("It's a tie. Both players chose 'scissors.'");
    } else if (hChoice === 'scissors' && cChoice === 'rock') {
        console.log("You lose. Rock beats scissors.");
    } else if (hChoice === 'scissors' && cChoice === 'paper') {
        console.log("You win! Scissors beats paper.");
    }
}