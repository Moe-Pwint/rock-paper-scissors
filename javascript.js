

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
console.log(getComputerChoice());


function getHumanChoice() {
  let humanPrompt = prompt("Please type 'rock' or 'paper' or 'scissors':");
  answerHuman = humanPrompt.toLowerCase();

  if (answerHuman != ('rock' || 'paper' || 'scissors')) {
    alert("Please check typos!");
    getHumanChoice();
  }
  else {return answerHuman;
  }
  return answerHuman;
}
console.log(getHumanChoice());

/*


*/
