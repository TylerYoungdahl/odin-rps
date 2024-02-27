const winsCounter = document.querySelector("#winsCounter");
const startBtn = document.querySelector("#startBtn");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const buttons = document.querySelectorAll(".btn");
const results = document.querySelector("#results");

let playerWins = 0;
let computerWins = 0;

function startGame() {
  startBtn.style.display = "none";
  rockBtn.style.display = "inline-block";
  paperBtn.style.display = "inline-block";
  scissorsBtn.style.display = "inline-block";
  results.style.display = "block";
  winsCounter.style.display = "block";
  results.textContent = "";

  winsCounter.textContent = `Player: ${playerWins} | Computer: ${computerWins}`;
}

function getComputerChoice() {
  const computerRps = ["rock", "paper", "scissors"];
  const randNum = Math.floor(Math.random() * computerRps.length);
  let computerChoice = computerRps[randNum];

  return computerChoice;
}

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  let winner = "";

  if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection === "scissors") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection === "rock") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection === "paper")
  ) {
    winner = "Player";
    playerWins += 1;
  } else if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection === "paper") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection === "scissors") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection === "rock")
  ) {
    winner = "Computer";
    computerWins += 1;
  } else if (playerSelection === computerSelection) {
    winner = "Nobody";
  }

  winsCounter.textContent = `Player: ${playerWins} | Computer: ${computerWins}`;
  results.textContent = `You played ${playerSelection}. The computer played ${computerSelection}. Winner: ${winner}.`;

  if (playerWins === 5) {
    gameOver(true);
  } else if (computerWins === 5) {
    gameOver(false);
  }
}

function gameOver(gameWinner) {
  console.log("game over");

  rockBtn.style.display = "none";
  paperBtn.style.display = "none";
  scissorsBtn.style.display = "none";
  winsCounter.style.display = "none";
  startBtn.style.display = "inline-block";

  playerWins = 0;
  computerWins = 0;

  results.textContent = `${gameWinner ? "You win!" : "Game Over!"}`;

  startBtn.textContent = "Play again?";
}

startBtn.addEventListener("click", startGame);
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));
