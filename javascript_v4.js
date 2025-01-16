//humanWin & computerWin check if their score = true or false in the current round//
let humanWin;
let computerWin;

//These counters will keep counts of scores for each round.//
var cScoreCounter = 0;
var hScoreCounter = 0;

//playStart is selected to be used to start the game.
const playStart = document.querySelector('#playStart');
playStart.addEventListener('click', startPlay); 

//Buttons to play the three options are selected//
const rBtn = document.querySelector('#rockBtn');
rBtn.addEventListener('click', () => playRound('rock'));
const pBtn = document.querySelector('#paperBtn');
pBtn.addEventListener('click',  () => playRound('paper'));
const sBtn = document.querySelector('#scissorsBtn');
sBtn.addEventListener('click',  () => playRound('scissors'));


//cScore (computer's score) will be appended to dCScore, which will display the score after each round.//
const dCScore = document.querySelector('#displayCompScore');
const cScore = document.createElement('p');
cScore.innerHTML = (`Computer's Score: ${cScoreCounter}`);
dCScore.appendChild(cScore);

//hScore (human's score) will be appended to dHScore, which will display the score after each round.//
const dHScore = document.querySelector('#displayHumanScore');
const hScore = document.createElement('p');
hScore.innerHTML = `Your Score: ${hScoreCounter}`;
dHScore.appendChild(hScore);

//announce will be appended to announcement, after every round, the announcement will be updated, including the final winner announcement.//
const announcement = document.querySelector('#announcement');
const announce = document.createElement('p');


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

function startPlay () {
    if (computerWin) {
    cScoreCounter += 1;
    cScore.textContent = (`Computer's Score: ${cScoreCounter}`);
    dCScore.appendChild(cScore);
    
    } else if (humanWin) {
        hScoreCounter += 1;
        hScore.textContent = `Your Score: ${hScoreCounter}`;
        dHScore.appendChild(hScore);
        
    } else {
        cScoreCounter += 0;
        cScore.textContent = (`Computer's Score: ${cScoreCounter}`);
        dCScore.appendChild(cScore);
        hScoreCounter += 0;
        hScore.textContent = `Your Score: ${hScoreCounter}`;
        dHScore.appendChild(hScore);
    }


    if (cScoreCounter == 5) {
    announce.innerHTML += `<br /> Computer wins! <br /> Computer's score is ${cScoreCounter} and Your score is ${hScoreCounter}`;
    announcement.appendChild(announce);
    } else if (hScoreCounter == 5) {
    announce.innerHTML += `<br /> You win! <br /> Computer's score is ${cScoreCounter} and Your score is ${hScoreCounter}`;
    announcement.appendChild(announce);
    }
}

function playRound(humanClick) {
    
    let computer = getComputerChoice();
    let human = humanClick;

    console.log(computer);
    
    if (human == 'rock') {
        if (computer == 'paper') {
            announce.innerHTML = "Your Choice: Rock  <br /> Computer's Choice: Paper";
            announcement.appendChild(announce);
            computerWin = true;
            humanWin = false;            
        } else if (computer == 'scissors') {
            announce.innerHTML = "Your Choice: Rock <br /> Computer's Choice: Scissors";
            announcement.appendChild(announce);
            humanWin = true;
            computerWin = false;
        } else if (computer == 'rock') {
            announce.innerHTML = "Your Choice: Rock <br /> Computer's Choice: Rock";
            announcement.appendChild(announce);
            computerWin = false;
            humanWin = false;
        } 
  
    } else if (human == 'paper') {
        if (computer == 'rock') {
            announce.innerHTML = "Your Choice: Paper  <br /> Computer's Choice: Rock";
            announcement.appendChild(announce);
            humanWin = true;
            computerWin = false;
        } else if (computer == 'paper') {
            announce.innerHTML = "Your Choice: Paper  <br /> Computer's Choice: Paper";
            announcement.appendChild(announce);
            computerWin = false;
            humanWin = false;
        } else if (computer == 'scissors') {
            announce.innerHTML = "Your Choice: Paper  <br /> Computer's Choice: Scissors";
            announcement.appendChild(announce);
            computerWin = true;
            humanWin = false;
        }
    } else if (human == 'scissors') {
        if (computer == 'rock') {
            announce.innerHTML = "Your Choice: Scissors  <br /> Computer's Choice: Scissors";
            announcement.appendChild(announce);
            computerWin = true;
            humanWin = false;
        } else if (computer == 'paper') {
            announce.innerHTML = "Your Choice: Scissors  <br /> Computer's Choice: Paper";
            announcement.appendChild(announce);
            humanWin = true;
            computerWin = false;
        } else if (computer == 'scissors') {
            announce.innerHTML = "Your Choice: Scissors  <br /> Computer's Choice: Scissors";
            announcement.appendChild(announce);
            computerWin = false;
            humanWin = false;
        }
    }
}
  


