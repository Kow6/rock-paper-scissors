/* 
generate computer r/p/s - DONE
create selection of r/p/s - DONE
capture input of r/p/s - DONE
store input of r/p/s into variable - DONE
store computer selection in r/p/s - DONE
compare 2 selections
output the answer

*/

// Declaring some varibales

let computerChoice
let playerChoice
let computerScore = 0
let playerScore = 0

// Defining the Funtion to create Computer Choice of R/P/S




//Defining the Funtion to create and store player Choice of R/P/S


/* function getPlayerChoice(){

    let playerChoiceinput = prompt("Enter Rock, Paper,or Scissors.")

    playerChoice = playerChoiceinput.toLowerCase()

    if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
    
    }
        else getPlayerChoice() // if entry isn't right then ask again 

}

*/

const rockButton = document.querySelector('#rock')
rockButton.addEventListener('click', () => {
    playerChoice = 'rock';
    console.log(playerChoice);
    
})

const paperButton = document.querySelector('#paper')
paperButton.addEventListener('click', () => {
    playerChoice = 'paper';
    console.log(playerChoice);
    
})

const scissorsButton = document.querySelector('#scissors')
scissorsButton.addEventListener('click', () => {
    playerChoice = 'scissors';
    console.log(playerChoice);
    
})



function getComputerChoice(){
    let computerChoiceVariable = Math.random()
    console.log(computerChoiceVariable)
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



//Defining the Game Round. The retrun value of a round is win/lose/tie

function gameRound(){

    getPlayerChoice();
    getComputerChoice();
    console.log(playerChoice);
    console.log(computerChoice);
    

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


/* COMMENT OUT the rounds game

function game(){

//run a round and put result into a string
let gameresultstring = gameRound() 

//check if result for a tie and if so print tie
if (gameresultstring.includes("tie")){
        console.log("tie")
        game()
}

//result is created only to handle games that are wins or losses 
let result = gameresultstring.includes("Win") //includles method evaluates to True if Win is there
   
   
    if (result == true){
        playerScore++
}
    
    else{
            computerScore++
}


console.log('Player Score ' + playerScore)
console.log('Computer Score ' + computerScore)

    if (playerScore > 4){
    console.log("You Win!")
}

    else if (computerScore > 4){
        console.log("Computer Wins!")
    }

    else game()
       
}

//instructing js to run the game

game() END COMNMENT */





