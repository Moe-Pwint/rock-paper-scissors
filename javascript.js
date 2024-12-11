

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


/*


*/
