const choices = { rock: "scissors", paper: "rock", scissors: "paper" };

const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");

const results = document.querySelector("#results");
const score = document.querySelector("#score");
const roundsInformation = document.querySelector("#rounds");

function getComputerChoice() {
    /** we need to use Math.random() and Math.floor to generate integers in
     * a range */
    let index = Math.floor(Math.random() * 3);
    return Object.keys(choices)[index];
}

function playGame(rounds = 5) {
    let humanScore = 0;
    let computerScore = 0;
    let currentRound = 0;

    results.textContent = "Click on a button to select a choice";

    // Function to play a round. Will return true if round is a draw, otherwise
    function playRound(humanChoice, computerChoice) {
        // Only play a round if the game is still ongoing
        if (currentRound >= rounds) {
            return;
        }

        if (choices[humanChoice] === computerChoice) {
            results.textContent = `You win the round! ${humanChoice} beats ${choices[humanChoice]}!`;
            humanScore++;
        } else if (choices[computerChoice] === humanChoice) {
            results.textContent = `You loose the round! ${computerChoice} beats ${choices[computerChoice]}!`;
            computerScore++;
        } else {
            results.textContent = `The round is a draw! You and the computer both chose ${humanChoice}!`;
        }

        currentRound++;
        updateScoreText();
    }

    function updateScoreText() {
        roundsInformation.textContent = `Round ${currentRound} of ${rounds}`;
        if (currentRound < rounds) {
            score.textContent = `Your Score: ${humanScore} Computer Score: ${computerScore}`;
        } else {
            // if the game has ended

            if (humanScore > computerScore) {
                score.textContent = "Game Over! You win!";
            } else if (computerScore > humanScore) {
                score.textContent = "Game Over! You loose!";
            } else {
                score.textContent = "Game Over! It was a draw!";
            }
        }
    }

    btnRock.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });

    btnPaper.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });

    btnScissors.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    });
}

playGame();
