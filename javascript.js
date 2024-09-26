const choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {

    /** we need to use Math.random() and Math.floor to generate integers in 
     * a range */ 
    let index = Math.floor(Math.random() * 3)
    return choices[index]
}