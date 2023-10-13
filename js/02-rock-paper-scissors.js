//Get User choice
let userChoice
do {
    userChoice = prompt('Please choose rock, paper, or scissors')
} while (userChoice != 'rock'  && userChoice !== 'paper' && userChoice !== 'scissors')

//Get Computer choice
let computerChoice = Math.random()
if (computerChoice <= 0.33) {
    computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
    computerChoice = "paper";
    } else {
    computerChoice = "scissors";
}

function compare(choice1, choice2){
    if (choice1 === choice2){
        alert(`Computer chose ${computerChoice} and you choose ${userChoice}, a tie!`);
    }
  else if (choice1 === "rock"){
    if (choice2 === "paper"){
        alert(`Computer chose ${computerChoice} and you choose ${userChoice}, you LOSE!`);
    } else
        alert(`Computer chose ${computerChoice} and you choose ${userChoice}, you WIN!`);
    }
  else if (choice1 === "paper"){
    if (choice2 === "scissors"){
        alert(`Computer chose ${computerChoice} and you choose ${userChoice}, you LOSE!`);
    } else
        alert(`Computer chose ${computerChoice} and you choose ${userChoice}, you WIN!`);
    }
  else if (choice1 === "scissors"){
    if (choice2 === "rock"){
        alert(`Computer chose ${computerChoice} and you choose ${userChoice}, you LOSE!`);
    } else
        alert(`Computer chose ${computerChoice} and you choose ${userChoice}, you WIN!`);
    }
  }

compare(userChoice, computerChoice)