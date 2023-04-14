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
let computerScore = 0
let playerScore = 0

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

    let playerChoiceinput = prompt("Enter Rock, Paper,or Scissors.")

    playerChoice = playerChoiceinput.toLowerCase()

    if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
    
    }
        else getPlayerChoice()

}

function gameRound(){

    getPlayerChoice()
    getComputerChoice()

    if (playerChoice == "rock" && computerChoice == "rock"){
        
        return "tie"
    }

    else if (playerChoice == "rock" && computerChoice == "paper") {
        return "You Lose! Paper covers Rock"
    }
    else if (playerChoice == "rock" && computerChoice == "scissors") {
        return "You Win! Rock crushes Scissors"
        }
    
    else if (playerChoice == "scissors" && computerChoice == "rock") {
         return "You Lose! Scissor gets crushed by Rock"
            }

    else if (playerChoice == "scissors" && computerChoice == "paper") {
         return "You Win! Scissors cuts up Paper"
                }

    else if (playerChoice == "scissors" && computerChoice == "scissors") {
         return "tie"
                    }

    else if (playerChoice == "paper" && computerChoice == "rock") {
        return "You Win! Paper covers Rock"
                        }

    else if (playerChoice == "paper" && computerChoice == "paper") {
        return "tie"
                            }

    else if (playerChoice == "paper" && computerChoice == "scissors") {
        return "You Lose! Paper gets cut up by Scissors"
                                }
    }




function game(){
    
let gameresultstring = gameRound()

    if (gameresultstring.includes("tie")){
        console.log("tie")
        game()
}
        
let result = gameresultstring.includes("Win")
   
   
    if (result == true){
        playerScore++
}
    
    else{
            computerScore++
}


console.log(playerScore)
console.log(computerScore)

    if (playerScore > 4){
    console.log("You Win!")
}

    else if (computerScore > 4){
        console.log("Computer Wins!")
    }

    else game()
       
}

game()


