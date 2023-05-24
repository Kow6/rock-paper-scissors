
// Declaring some varibales

let computerChoice
let playerChoice
let computerScore = 0
let playerScore = 0




//funtion to generate computer choice
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



//Function for a Game Round. The retrun value of a round is win/lose/tie

function gameRound(){

    
    getComputerChoice();
    


    
    const container = document.querySelector('#comp');
    container.removeChild(container.lastElementChild);
    const content = document.createElement('span');
    content.textContent = computerChoice;
   
    container.appendChild(content);


    console.log('Player Pick ' + playerChoice);
    console.log('Computer Pick ' + computerChoice);
    

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

//funtion for what happens when there is a click

function postRoundResult(){
        let gameresultstring = gameRound();
        const container2 = document.querySelector('#result');
        container2.removeChild(container2.lastElementChild);
        const content2 = document.createElement('span');
        content2.textContent = gameresultstring;
        
        
        container2.append(content2);


        let result = gameresultstring.includes("Win") //includles method evaluates to True if Win is there
   
   
        if (result == true){
            playerScore++
}
    
        else{
            computerScore++
}
        
    }

//Event Listeners for Player Choice
const rockButton = document.querySelector('#rock')
rockButton.addEventListener('click', () => {
    playerChoice = 'rock';
})

const paperButton = document.querySelector('#paper')
paperButton.addEventListener('click', () => {
    playerChoice = 'paper';
})

const scissorsButton = document.querySelector('#scissors')
scissorsButton.addEventListener('click', () => {
    playerChoice = 'scissors';  
})   

//Event Listeners to kick off game.
rockButton.addEventListener('click', function(){
    postRoundResult()});
paperButton.addEventListener('click', function(){
    postRoundResult()});
scissorsButton.addEventListener('click', function(){
    postRoundResult()});





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





