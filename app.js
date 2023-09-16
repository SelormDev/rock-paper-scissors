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
    case 1:
      return "paper";
    case 2:
      return "scissors";
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

/* ----------------------------------------------------- */

// --------------- UI Functionality --------------------

let container = document.querySelector(".container");

let scoreContainer = document.createElement("div");
let imageContainer = document.createElement("div");
let buttonDiv = document.createElement("div");
let btn = document.createElement("button");
let btn1 = document.createElement("button");
let btn2 = document.createElement("button");
let btn3 = document.createElement("button");
let testBtn = document.createElement("button"); //! Delete Later
let message1 = document.createElement("p");
let message2 = document.createElement("p");
let message3 = document.createElement("p");
let reset = document.createElement("p");
let computerChoice = document.createElement("p");
let playerChoice = document.createElement("p");
let rockLeft = document.createElement("img");
let rockRight = document.createElement("img");
let paperLeft = document.createElement("img");
let paperRight = document.createElement("img");
let scissorsLeft = document.createElement("img");
let scissorsRight = document.createElement("img");

const firstUI = () => {
  btn.textContent = "Play";
  btn.classList.add("btn");
  message1.textContent = "Rock Paper Scisors By SelormDev";
  message1.classList.add("p");
  container.append(btn, message1);

  btn.addEventListener("click", secondUI);
  changeUI("secondUI");
};

const secondUI = () => {
  message2.textContent = "Rock Paper Scisors By SelormDev";
  reset.textContent = "Reset the tour";
  btn1.textContent = "Rock";
  btn2.textContent = "Paper";
  btn3.textContent = "Scisssors";

  testBtn.textContent = "Return";

  computerChoice.textContent = "Computer Score: ";
  playerChoice.textContent = "Player Score: ";
  scoreContainer.append(playerChoice, computerChoice);
  scoreContainer.classList.add("score-container");

  rockLeft.src = "./img/rock-left-hand.png";
  rockLeft.classList.add("transform", "invert-color");

  paperRight.src = "./img/Paper-left-hand.png";
  paperRight.classList.add("transform");

  imageContainer.append(rockLeft, paperRight);
  imageContainer.classList.add("image-container");

  message3.textContent = "Choose your move, Rock, Paper or Scissors?";
  buttonDiv.classList.add("btnParent");
  btn1.classList.add("btn", "btn-game");
  btn2.classList.add("btn", "btn-game");
  btn3.classList.add("btn", "btn-game");
  buttonDiv.append(btn1, btn2, btn3);

  container.append(
    message2,
    testBtn,
    reset,
    scoreContainer,
    imageContainer,
    message3,
    buttonDiv
  );

  testBtn.addEventListener("click", firstUI);
  changeUI("firstUI");
};

const changeUI = function (ui) {
  if (ui === "secondUI") {
    container.removeChild(reset);
    container.removeChild(testBtn);
    container.removeChild(buttonDiv);
    container.removeChild(message2);
    container.removeChild(message3);
    container.removeChild(scoreContainer);
    container.removeChild(imageContainer);
  } else if (ui === "firstUI") {
    container.removeChild(btn);
    container.removeChild(message1);
  }

  container.classList.toggle("first-ui");
  container.classList.toggle("second-ui");
};

firstUI();
// secondUI();
