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
  
const playStart = document.querySelector('#playStart');
let humanScore = 0;
let computerScore = 0;
var counter = 0;
const dCScore = document.querySelector('#displayCompScore');
const dHScore = document.querySelector('#displayHumanScore');
const cScore = document.createElement('p');
const hScore = document.createElement('p');
var cScoreCounter = 0;
var hScoreCounter = 0;

playStart.addEventListener('click', () => {
    counter += 1;
    if (counter == 5) {
        const announcement = document.querySelector('#announcement');
        const finalAnn = document.createElement('p');
        finalAnn.textContent = 'The game is over';
        announcement.appendChild(finalAnn);
    }

    if (computerScore == 1) {
        cScoreCounter += 1;
        cScore.textContent = cScoreCounter;
        dCScore.appendChild(cScore);
    } else if (humanScore ==1) {
        hScoreCounter += 1;
        hScore.textContent = hScoreCounter;
        dHScore.appendChild(hScore);
    } 
}); 


function playRound(humanClick) {
    
    let computer = getComputerChoice();
    let human = humanClick;

  
    console.log(computer);
    
    if (human == 'rock') {
        if (computer == 'paper') {
            console.log(alert("You lose! Paper beats rock."));
            computerScore++;
        } else if (computer == 'scissors') {
            console.log(alert ("You win! Rock beats scissors."));
            humanScore++;
        } else if (computer == 'rock') {
            console.log(alert("It's a tie!"));
            computerScore = 0;
            humanScore = 0;
        } 
  
    } else if (human == 'paper') {
        if (computer == 'rock') {
            console.log(alert("You win! Paper beats rock."));
            humanScore++;
        } else if (computer == 'paper') {
            console.log(alert("It's a tie!"));
            computerScore = 0;
            humanScore = 0;
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
            computerScore = 0;
            humanScore = 0;
        }
    }
}
  
const rBtn = document.querySelector('#rockBtn');
const pBtn = document.querySelector('#paperBtn');
const sBtn = document.querySelector('#scissorsBtn');

rBtn.addEventListener('click', () => playRound('rock'));
pBtn.addEventListener('click',  () => playRound('paper'));
sBtn.addEventListener('click',  () => playRound('scissors'));




  /*When playStart is clicked, 
  It will play 5 games (let statement)
  - if the btn is rBtn, playRound with 'rock';
  - if pBtn, with 'paper';
  - if sBtn, with 'scissors';
  Update the score board after each round



 /*
  function playGame() {
    for (let i = 0; i < 5; i++) {
    console.log(playRound());
    }
    console.log(alert(`Computer score is ${computerScore} and your score is ${humanScore}.`));
  }
  
  console.log(playGame());
  */