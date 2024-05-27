console.log(getComputerChoice());
console.log(getHumanChoice());
function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let indx = Math.floor(Math.random() * 3);

    return options[indx];
}

function getHumanChoice() {
    let humanChoice = prompt("Your selection: ");

    return humanChoice;
}