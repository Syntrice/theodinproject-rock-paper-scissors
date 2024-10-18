const choices = { rock: "scissors", paper: "rock", scissors: "paper" };

function getComputerChoice() {
    /** we need to use Math.random() and Math.floor to generate integers in
     * a range */
    let index = Math.floor(Math.random() * 3);
    return Object.keys(choices)[index];
}

function getHumanChoice() {
    let choice = prompt("Enter your choice [rock, paper, scissors]:");
    /* we don't want the input to be case sensitive */
    choice = choice.toLowerCase();
    if (Object.keys(choices).includes(choice)) {
        return choice;
    }
}

// Function to play a round. Will return false if round is a draw, otherwise true
function playRound(humanChoice, computerChoice) {
    if (choices[humanChoice] === computerChoice) {
        console.log(`You win! ${humanChoice} beats ${choices[humanChoice]}!`);
        return true;
    } else if (choices[computerChoice] === humanChoice) {
        console.log(
            `You loose! ${computerChoice} beats ${choices[computerChoice]}!`
        );
        return true;
    } else {
        console.log(
            `It's a draw! You and the computer both chose ${humanChoice}!`
        );
        return false;
    }
}

const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");

btnRock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});
btnPaper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});
btnScissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});
