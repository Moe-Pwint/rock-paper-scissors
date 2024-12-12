

function getComputerChoice() {  
    let computerNumber = Math.floor(Math.random()*3);
      if (computerNumber === 0) {
          answer = "rock";
      } else if (computerNumber === 1) {
          answer = "paper";
      } else {
          answer = "scissors";
      }
  return answer;
}


function getHumanChoice() {
let humanPrompt = prompt("Please type 'rock' or 'paper' or 'scissors':");
return humanPrompt;
}
  
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    let human = humanChoice.toLowerCase();
    let computer = computerChoice;

    console.log(computerChoice);
    console.log(humanChoice);
    
    if (human == 'rock') {
      if (computer == 'rock') {
        console.log(alert("It's a tie!"));
      } else if (computer == 'paper') {
        console.log(alert("You lose! Paper beats rock."));
        computerScore++;
      } else if (computer == 'scissors') {
        console.log(alert ("You win! Rock beats scissors."));
        humanScore++;
      }
  
    } else if (human == 'paper') {
      if (computer == 'rock') {
        console.log(alert("You win! Paper beats rock."));
        humanScore++;
      } else if (computer == 'paper') {
        console.log(alert("It's a tie!"));
      } else if (computer == 'scissors') {
        console.log(alert ("You lose! Scissors beats paper."));
        computerScore++;
      }
    } else if (human == 'scissors') {
      if (computer == 'rock') {
        console.log(alert("You lose! Rock beats scissors."));
        computerScore++;
      } else if (computer == 'paper') {
        console.log(alert("You win! Scissors beats paper."));
        humanScore++;
      } else if (computer == 'scissors') {
        console.log(alert("It's a tie!"));
      }
    }
}
  
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
  
const pRound = playRound(humanSelection, computerSelection);


  
function playGame(startRound) {
    let round = startRound;
    for (let i = 0; i < 5; i++) {
        console.log(round);
    }
console.log(alert(`Computer score is ${computerScore} and your score is ${humanScore}.`));
}
  
  
console.log(playGame(pRound));
  
