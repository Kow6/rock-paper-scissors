/* 
generate computer r/p/s - DONE
create selection of r/p/s - DONE
capture input of r/p/s - DONE
store input of r/p/s into variable - DONE
store computer selection in r/p/s - DONE
compare 2 selections
output the answer

*/

// Declare some varibales

let computerChoice
let playerChoice

// Create Funtion for Computer Choice of R/P/S

function getComputerChoice(){
    let computerChoiceVariable = Math.random()
    
    if (computerChoiceVariable < .334){
        computerChoice = "rock"
    }

    else if (computerChoiceVariable <.667){
        computerChoice ="paper"
    }

    else
        computerChoice ="scissors"
          
        
    return computerChoice
}

//Create and store player Choice of R/P/S


function getPlayerChoice(){

playerChoice = prompt("Enter your selection")

playerChoice.toLowerCase

if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
    console.log("great")
}
    else getPlayerChoice()

}

getPlayerChoice()

/* function gameRound(){

    if (playerChoice == "rock" && computerChoice == "rock"){
        console.log("tie")
    }

    else if (playerChoice == "rock" && computerChoice == "paper") {
        console.log("You Lose! Paper covers Rock")
    }
    else if (playerChoice == "rock" && computerChoice == "scissors") {
        console.log("You Win! Rock crushes Scissors")
        }
    else
        console.log("not coded")
    }

gameRound */