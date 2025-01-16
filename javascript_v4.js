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

//playStart is selected to be used to start the game.
const playStart = document.querySelector('#playStart');
//humanWin checks if the human scores in the current round//
let humanWin;
//computerWin checks if the computer scores in the current round//
let computerWin;

//The counter will increment 1 after each round//
var counter = 0;

//cScore (computer's score) will be appended to dCScore, which will display the score after each round.//
const dCScore = document.querySelector('#displayCompScore');
const cScore = document.createElement('p');


//hScore (human's score) will be appended to dHScore, which will display the score after each round.//
const dHScore = document.querySelector('#displayHumanScore');
const hScore = document.createElement('p');


//These counters will keep counts of scores for each round.//
var cScoreCounter = 0;
var hScoreCounter = 0;

//When playStart is clicked, the game will start.//
playStart.addEventListener('click', () => {
    
        if (computerWin) {
            cScoreCounter += 1;
            cScore.textContent = cScoreCounter;
            dCScore.appendChild(cScore);
            hScoreCounter += 0;
            hScore.textContent = hScoreCounter;
            dHScore.appendChild(hScore);
        } else if (humanWin) {
            hScoreCounter += 1;
            hScore.textContent = hScoreCounter;
            dHScore.appendChild(hScore);
            cScoreCounter += 0;
            cScore.textContent = cScoreCounter;
            dCScore.appendChild(cScore);
        } else {
            cScoreCounter += 0;
            cScore.textContent = cScoreCounter;
            dCScore.appendChild(cScore);
            hScoreCounter += 0;
            hScore.textContent = hScoreCounter;
            dHScore.appendChild(hScore);
        }
    
    counter += 1;

    if (counter == 5) {
        const announcement = document.querySelector('#announcement');
        const finalAnn = document.createElement('p');
        finalAnn.textContent = 'The game is over';
        announcement.appendChild(finalAnn);
    }
}); 


function playRound(humanClick) {
    
    let computer = getComputerChoice();
    let human = humanClick;

    console.log(computer);
    
    if (human == 'rock') {
        if (computer == 'paper') {
            console.log(alert("You lose! Paper beats rock."));
            computerWin = true;
            humanWin = false;            
        } else if (computer == 'scissors') {
            console.log(alert ("You win! Rock beats scissors."));
            humanWin = true;
            computerWin = false;
        } else if (computer == 'rock') {
            console.log(alert("It's a tie!"));
            computerWin = false;
            humanWin = false;
        } 
  
    } else if (human == 'paper') {
        if (computer == 'rock') {
            console.log(alert("You win! Paper beats rock."));
            humanWin = true;
            computerWin = false;
        } else if (computer == 'paper') {
            console.log(alert("It's a tie!"));
            computerWin = false;
            humanWin = false;
        } else if (computer == 'scissors') {
            console.log(alert ("You lose! Scissors beats paper."));
            computerWin = true;
            humanWin = false;
        }
    } else if (human == 'scissors') {
        if (computer == 'rock') {
            console.log(alert("You lose! Rock beats scissors."));
            computerWin = true;
            humanWin = false;
        } else if (computer == 'paper') {
            console.log(alert("You win! Scissors beats paper."));
            humanWin = true;
            computerWin = false;
        } else if (computer == 'scissors') {
            console.log(alert("It's a tie!"));
            computerWin = false;
            humanWin = false;
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