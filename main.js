
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

function playRound(humanChoice, computerChoice, resultsDiv) {
    let hChoice = humanChoice.toLowerCase();
    let cChoice = computerChoice.toLowerCase();

    if (hChoice === 'rock' && cChoice === 'rock') {
        resultsDiv.innerText =  "It's a tie. Both players chose 'rock.'";
    } else if (hChoice === 'rock' && cChoice === 'paper') {
        resultsDiv.innerText =  "You lose. Paper beats rock.";
        return "computer";
    } else if (hChoice === 'rock' && cChoice === 'scissors') {
        resultsDiv.innerText =  "You win! Rock beats scissors.";
        return "human";
    } else if (hChoice === 'paper' && cChoice === 'paper') {
        resultsDiv.innerText =  "It's a tie. Both players chose 'paper.'";
    } else if (hChoice === 'paper' && cChoice === 'scissors') {
        resultsDiv.innerText =  "You lose. Scissors beats paper.";
        return "computer";
    } else if (hChoice === 'paper' && cChoice === 'rock') {
        resultsDiv.innerText =  "You win! Paper beats rock.";
        return "human";
    } else if (hChoice === 'scissors' && cChoice === 'scissors') {
        resultsDiv.innerText =  "It's a tie. Both players chose 'scissors.'";
    } else if (hChoice === 'scissors' && cChoice === 'rock') {
        resultsDiv.innerText =  "You lose. Rock beats scissors.";
        return "computer";
    } else if (hChoice === 'scissors' && cChoice === 'paper') {
        resultsDiv.innerText =  "You win! Scissors beats paper.";
        return "human";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    // register event listeners for buttons

    const rockButton = document.querySelector("#rock");
    rockButton.addEventListener("click", playOnClick);

    const paperButton = document.querySelector("#paper");
    paperButton.addEventListener("click", playOnClick);

    const scissorsButton = document.querySelector("#scissors");
    scissorsButton.addEventListener("click", playOnClick);
    
    const computerChoice = getComputerChoice();

    let winner = playRound(humanChoice, computerChoice);
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
    resultsDiv.innerText =  (`Your score: ${humanScore}`);
    resultsDiv.innerText =  (`COM's score: ${computerScore}`);
}

function playOnClick(event) {
    const humanChoice = event.target.id;
    const computerChoice = getComputerChoice();
    const resultsDiv = document.querySelector("div.results");
    let winner = playRound(humanChoice, computerChoice, resultsDiv);
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
    if (humanScore === 5) {
        resultsDiv.innerText += `\nYou won the game ${humanScore} to ${computerScore}.`
    } else if (computerScore === 5) {
        resultsDiv.innerText += `You lost the game ${humanScore} to ${computerScore}.`
    } else {
        resultsDiv.innerText += `\nYour score: ${humanScore}\nCOM's score: ${computerScore}`
    }

}

let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", playOnClick);

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", playOnClick);

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", playOnClick);
