const choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {

    /** we need to use Math.random() and Math.floor to generate integers in 
     * a range */ 
    let index = Math.floor(Math.random() * 3)
    return choices[index]
}

function getHumanChoice() {
    let choice = prompt("Enter your choice [rock, paper, scissors]:")
    /* we don't want the input to be case sensitive */
    choice = choice.toLowerCase()
    switch (choice) {
        case "rock":
            return choices[0]
        case "paper":
            return choices[1]
        case "scissors":
            return choices[2]
    }
}