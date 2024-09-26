
const choices = {"rock" : "scissors", "paper" : "rock", "scissors" : "paper"}

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

console.log(getHumanChoice())