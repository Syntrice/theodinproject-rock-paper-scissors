
const choices = {"rock" : "scissors", "paper" : "rock", "scissors" : "paper"};

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

function playGame(rounds = 5) {

    let humanScore = 0;
    let computerScore = 0;

    // Function to play a round. Will return false if round is a draw, otherwise true
    function playRound(humanChoice, computerChoice) {
        if (choices[humanChoice] === computerChoice) {
            console.log(`You win! ${humanChoice} beats ${choices[humanChoice]}!`);
            humanScore++;
            return true
        } else if (choices[computerChoice] === humanChoice) {
            console.log(`You loose! ${computerChoice} beats ${choices[computerChoice]}!`);
            computerScore++
            return true
        } else {
            console.log(`It's a draw! You and the computer both chose ${humanChoice}!`);
            return false
        }
    }

    let currentRound = 0;
    while (currentRound < rounds) {
        console.log(`Your score: ${humanScore}`)
        console.log(`Computer score: ${computerScore}`)
        let humanChoice = getHumanChoice();

        // clause for invalid human input
        if (humanChoice === undefined) {
            console.log("Please enter a valid choice. Possible choices are 'rock', 'paper', or 'scissors'")
            continue;
        }
        let computerChoice = getComputerChoice();
        
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);

        let isDraw = playRound(humanChoice, computerChoice);
        if (isDraw) {
            currentRound++
        }
    }

    console.log("Game over!")
    console.log(`You scored: ${humanScore}`)
    console.log(`Computer scored: ${computerScore}`)

    if (humanScore > computerScore) {
        console.log("You win!")
    } else if (computerScore > humanScore) {
        console.log("Computer wins!")
    } else {
        console.log("You and computer drew!")
    }

}

playGame()