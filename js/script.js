
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
        const resultContainer = document.querySelector('#result');
        resultContainer.removeChild(resultContainer.lastElementChild);
        const content2 = document.createElement('span');
        content2.textContent = gameresultstring;
        
        
        resultContainer.append(content2);


        let result = gameresultstring.includes("Win") //includles method evaluates to True if Win is there
   
   
        if (result == true){
            playerScore++
}
    
        else{
            computerScore++
}


const playerContainer = document.querySelector('#playerscore');
playerContainer.removeChild(playerContainer.lastElementChild);
const playerContent = document.createElement('span');
playerContent.textContent = playerScore;
playerContainer.appendChild(playerContent);

const compContainer = document.querySelector('#compscore');
compContainer.removeChild(compContainer.lastElementChild);
const compContent = document.createElement('span');
compContent.textContent = computerScore;
compContainer.appendChild(compContent);

if (playerScore > 4) {

    const winnerContainer = document.querySelector('#winner');
    const winnerContent = document.createElement('div');
    winnerContent.textContent = "You WIN!"
    winnerContainer.append(winnerContent);
}

if (computerScore > 4) {

    const winnerContainer = document.querySelector('#winner');
    const winnerContent = document.createElement('div');
    winnerContent.textContent = "The Basilisk WINS!"
    winnerContainer.append(winnerContent);
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

//TRYING


