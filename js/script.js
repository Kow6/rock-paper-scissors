/* 
generate computer r/p/s - DONE
create selection of r/p/s - DONE
capture input of r/p/s - DONE
store input of r/p/s into variable - DONE
store computer selection in r/p/s - DONE
compare 2 selections
output the answer




*/

let computerChoice

function getComputerChoice(){
    let computerChoiceVariable = Math.random()
    
    if (computerChoiceVariable < .334){
        computerChoice = "Rock"
    }

    else if (computerChoiceVariable <.667){
        computerChoice ="Paper"
    }

    else
        computerChoice ="Scissors"
    
       
        
    return computerChoice
}



let playerChoice = prompt("Enter your selection")

playerChoice.toLowerCase

if (playerChoice != "rock" || playerChoice != "paper" || playerChoice != "scissors") {

    playerChoice = prompt("Renter your selection")}

console.log(playerChoice)


