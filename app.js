/* 
🔰 PSEUDOCODE
✔ 1. Get computer choice
✔ 2. Get user choice
✔ 3. compare computer choice to user choice
✔ 4. determine who wins
✔ 5. Play for five rounds

🔰 CHOICES
  -rock (0)
  -paper (1)
  -scissors (2)

🔰 Rule of game
  -if rock and paper, paper wins (0 && 1 = 1)
  -if rock and scissors, rock wins (0 && 2 = 0)
  -if paper and scissors, scissors wins (1 && 2 = 2)

*/

// Get computer choice
function computerSelection() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      return "Error";
  }
}
let userScore = 0;
let computerScore = 0;
let stat;
let info;

const checkWinner = function (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    stat = 2;
    info = "It's a tie";
    return info;
  } else if (userChoice === "rock" && computerChoice === "paper") {
    stat = 0;
    computerScore++;
    info = "Rock lost to Paper";
    return info;
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    stat = 1;
    userScore++;
    info = "You won, Rock beats Scissors";
    return info;
  } else if (userChoice === "paper" && computerChoice === "rock") {
    stat = 1;
    userScore++;
    info = "You won, Paper beats Rock";
    return info;
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    stat = 0;
    computerScore++;
    info = "Paper lost to Scissors";
    return info;
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    stat = 0;
    computerScore++;
    info = "Scissors lost to Rock";
    return info;
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    stat = 1;
    userScore++;
    info = "You won, Scissors beats paper";
    return info;
  } else {
    return -1;
  }
};

const playGame = function () {
  let targetScore = 5;
  while (userScore !== targetScore && computerScore !== targetScore) {
    let = userChoice = prompt(
      "Choose between rock, paper, and scissors"
    ).toLowerCase();
    let computerChoice = computerSelection();
    checkWinner(userChoice, computerChoice);
    console.log(info);
    console.log(`Your Score: ${userScore} - Computer Score: ${computerScore}`);
  }
};

// playGame();

//  UI Functionality

let container = document.querySelector(".container");

let containerDiv = document.createElement("div");
let headerMessage = document.createElement("h2");
let btn = document.createElement("button");
let message = document.createElement("p");
let reset = document.createElement("p");
let computerChoice = document.createElement("p");
let playerChoice = document.createElement("p");

const firstUI = () => {
  btn.textContent = "Play";
  btn.classList.add("btn");
  message.textContent = "Rock Paper Scisors By SelormDev";
  message.classList.add("p");
  container.appendChild(btn);
  container.appendChild(message);
};

firstUI();
