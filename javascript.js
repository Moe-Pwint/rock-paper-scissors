

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

playRound(humanSelection, computerSelection);

function playGame(){
  let humanScore = 0;
  let computerScore = 0;
  



}


/*
Step 5: Write the logic to play a single round
Your game will be played round by round. 
     + Create a new function named playRound.
You will write a function that takes the human and computer player choices as arguments, 
     + Define two parameters for playRound: humanChoice and computerChoice.
     + Use these two parameters to take the human and computer choices as arguments.
plays a single round, 
increments the round winner’s score 
     - Increment the humanScore or computerScore variable based on the round winner.
and logs a winner announcement.
     + Write the code for your playRound function to console.log a string value representing the round winner,
     + such as: “You lose! Paper beats Rock”.

 
 

*/
