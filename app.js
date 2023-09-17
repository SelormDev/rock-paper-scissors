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

let targetScore = 5;

let userChoice;
let computerChoice;

// const playGame = function () {
//   while (userScore !== targetScore && computerScore !== targetScore) {
//     // let userChoice = prompt(
//     //   "Choose between rock, paper, and scissors"
//     // ).toLowerCase();
//     computerChoice = computerSelection();
//     checkWinner(userChoice, computerChoice);
//     console.log(info);
//     console.log(`Your Score: ${userScore} - Computer Score: ${computerScore}`);
//   }
// };

// playGame();

/* ----------------------------------------------------- */

// --------------- UI Functionality --------------------

let container = document.querySelector(".container");

let scoreContainer = document.createElement("div");
let imageContainer = document.createElement("div");
let buttonDiv = document.createElement("div");
let btn = document.createElement("button");
let rockBtn = document.createElement("button");
let paperBtn = document.createElement("button");
let scissorsBtn = document.createElement("button");
let returnBtn = document.createElement("button"); //! Delete Later
let greetings = document.createElement("p");
let headerMessage = document.createElement("p");
let winMessage = document.createElement("p");
let info = document.createElement("p");
let decideMessage = document.createElement("p");
let computerScoreOutput = document.createElement("p");
let playerScoreOutput = document.createElement("p");
let computerHand = document.createElement("img");
let playerHand = document.createElement("img");

/*------------------------------------------------*/
/*------------------Greeting Page-----------------*/

const firstUI = () => {
  btn.textContent = "Play";
  btn.classList.add("btn");
  greetings.textContent = "Rock Paper Scisors By SelormDev";
  greetings.classList.add("greetings");
  container.append(btn, greetings);

  btn.addEventListener("click", secondUI);
  changeUI("secondUI");
};

/*-------------------------------------------------*/
/*--------------------Game Page--------------------*/

const secondUI = () => {
  let userScore = 0;
  let computerScore = 0;

  const checkWinner = function (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      info.textContent = "It's a tie";
    } else if (userChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      info.textContent = "Rock lost to Paper";
    } else if (userChoice === "rock" && computerChoice === "scissors") {
      userScore++;
      info.textContent = "You won, Rock beats Scissors";
    } else if (userChoice === "paper" && computerChoice === "rock") {
      userScore++;
      info.textContent = "You won, Paper beats Rock";
    } else if (userChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
      info.textContent = "Paper lost to Scissors";
    } else if (userChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
      info.textContent = "Scissors lost to Rock";
    } else if (userChoice === "scissors" && computerChoice === "paper") {
      userScore++;
      info.textContent = "You won, Scissors beats paper";
    } else {
      return -1;
    }
  };
  // Heading
  headerMessage.textContent = "Rock Paper Scisors By SelormDev";
  headerMessage.classList.add("header-message");

  // Playing Buttons (Rock, Paper, Scissors)
  rockBtn.textContent = "Rock";
  paperBtn.textContent = "Paper";
  scissorsBtn.textContent = "Scisssors";
  // Test Button
  returnBtn.textContent = "Return";
  returnBtn.classList.add("btn", "btn-test");
  // Score Kepping message
  computerScoreOutput.classList.add("score-text");
  playerScoreOutput.classList.add("score-text");
  scoreContainer.append(computerScoreOutput, playerScoreOutput);
  scoreContainer.classList.add("score-container");

  computerHand.src = "./img/rock1.png";
  computerHand.classList.add("transform");
  playerHand.src = "./img/rock.png";

  imageContainer.append(computerHand, playerHand);
  imageContainer.classList.add("image-container");

  info.classList.add("message-text");

  decideMessage.textContent = "Choose your move, Rock, Paper or Scissors?";
  decideMessage.classList.add("message-text");

  buttonDiv.classList.add("btnParent");
  rockBtn.classList.add("btn", "btn-game");
  paperBtn.classList.add("btn", "btn-game");
  scissorsBtn.classList.add("btn", "btn-game");
  buttonDiv.append(rockBtn, paperBtn, scissorsBtn);

  returnBtn.addEventListener("click", firstUI);

  rockBtn.addEventListener("click", function () {
    userChoice = "rock";
    computerChoice = computerSelection();
    playerHand.src = "./img/rock.png";
    playerHand.classList.remove("transform", "invert-color");
    if (computerChoice === "rock") {
      computerHand.src = "./img/rock1.png";
      computerHand.classList.add("transform");
      computerHand.classList.remove("invert-color");
    } else if (computerChoice === "paper") {
      computerHand.src = "./img/paper1.png";
      computerHand.classList.remove("transform", "invert-color");
    } else {
      computerHand.src = "./img/scissors1.png";
      computerHand.classList.add("transform", "invert-color");
    }
    checkWinner(userChoice, computerChoice);
    computerScoreOutput.textContent = `Computer Score: ${computerScore}`;
    playerScoreOutput.textContent = `Player Score: ${userScore}`;
  });

  paperBtn.addEventListener("click", function () {
    userChoice = "paper";
    computerChoice = computerSelection();
    playerHand.src = "./img/paper.png";
    playerHand.classList.add("transform");
    playerHand.classList.remove("invert-color");
    if (computerChoice === "rock") {
      computerHand.src = "./img/rock1.png";
      computerHand.classList.add("transform");
      computerHand.classList.remove("invert-color");
    } else if (computerChoice === "paper") {
      computerHand.src = "./img/paper1.png";
      computerHand.classList.remove("transform", "invert-color");
    } else {
      computerHand.src = "./img/scissors1.png";
      computerHand.classList.add("transform", "invert-color");
    }

    checkWinner(userChoice, computerChoice);
    computerScoreOutput.textContent = `Computer Score: ${computerScore}`;
    playerScoreOutput.textContent = `Player Score: ${userScore}`;
  });

  scissorsBtn.addEventListener("click", function () {
    userChoice = "scissors";
    computerChoice = computerSelection();
    playerHand.src = "./img/scissors.png";
    playerHand.classList.add("invert-color");
    playerHand.classList.remove("transform");

    if (computerChoice === "rock") {
      computerHand.src = "./img/rock1.png";
      computerHand.classList.add("transform");
      computerHand.classList.remove("invert-color");
    } else if (computerChoice === "paper") {
      computerHand.src = "./img/paper1.png";
      computerHand.classList.remove("transform", "invert-color");
    } else {
      computerHand.src = "./img/scissors1.png";
      computerHand.classList.add("transform", "invert-color");
    }
    checkWinner(userChoice, computerChoice);
    computerScoreOutput.textContent = `Computer Score: ${computerScore}`;
    playerScoreOutput.textContent = `Player Score: ${userScore}`;
  });

  container.append(
    headerMessage,
    returnBtn,
    scoreContainer,
    winMessage,
    imageContainer,
    info,
    decideMessage,
    buttonDiv
  );

  changeUI("firstUI");
};

const changeUI = function (ui) {
  if (ui === "secondUI") {
    container.removeChild(returnBtn);
    container.removeChild(buttonDiv);
    container.removeChild(headerMessage);
    container.removeChild(decideMessage);
    container.removeChild(scoreContainer);
    container.removeChild(imageContainer);
  } else if (ui === "firstUI") {
    container.removeChild(btn);
    container.removeChild(greetings);
  }

  container.classList.toggle("first-ui");
  container.classList.toggle("second-ui");
};

firstUI();
// secondUI();
