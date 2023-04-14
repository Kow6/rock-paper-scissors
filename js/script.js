/* 
generate computer r/p/s - DONE
create selection of r/p/s
capture input of r/p/s
store input of r/p/s into variable
store computer selection in r/p/s
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

console.log(getComputerChoice())