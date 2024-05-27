console.log(getComputerChoice());

function getComputerChoice() {
    options = ['rock', 'paper', 'scissors'];
    indx = Math.floor(Math.random() * 3);

    return options[indx];
}