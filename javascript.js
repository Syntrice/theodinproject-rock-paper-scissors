
const choices = {"rock" : "scissors", "paper" : "rock", "scissors" : "paper"}
let humanScore = 0
let computerScore = 0

function getComputerChoice() {

    /** we need to use Math.random() and Math.floor to generate integers in 
     * a range */ 
    let index = Math.floor(Math.random() * 3)
    return Object.keys(choices)[index]
}

function getHumanChoice() {
    let choice = prompt("Enter your choice [rock, paper, scissors]:")
    /* we don't want the input to be case sensitive */
    choice = choice.toLowerCase()
    if (Object.keys(choices).includes(choice)) {
        return choice
    }
}

function playRound(humanChoice, computerChoice) {
    if (choices[humanChoice] === computerChoice) {
        console.log(`You win! ${humanChoice} beats ${choices[humanChoice]}!`)
        humanScore++
    } else if (choices[computerChoice] === humanChoice) {
        console.log(`You loose! ${computerChoice} beats ${choices[computerChoice]}!`)
        computerChoice++
    } else {
        console.log(`It's a draw! You and the computer both chose ${humanChoice}!`)
    }
}

while (true) {
    let humanChoice = getHumanChoice()
    console.log(`You chose: ${humanChoice}`)

    let computerChoice = getComputerChoice()
    console.log(`Computer choses: ${computerChoice}`)

    playRound(humanChoice, computerChoice)
}

