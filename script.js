const btn = document.querySelectorAll(".btn");
const results = document.querySelector("#results");

function getComputerChoice() {
  const randNum = Math.floor(Math.random() * 3) + 1;
  let computerChoice = "";
  if (randNum === 1) {
    computerChoice = "rock";
  } else if (randNum === 2) {
    computerChoice = "paper";
  } else if (randNum === 3) {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Rock, paper, or scissors?");
  computerSelection = getComputerChoice();
  let winner = "";

  if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection === "scissors") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection === "rock") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection === "paper")
  ) {
    winner = "player";
  } else if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection === "paper") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection === "scissors") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection === "rock")
  ) {
    winner = "computer";
  } else if (playerSelection === computerSelection) {
    winner = "tie";
  }

  console.log(`You played ${playerSelection}`);
  console.log(`Computer played ${computerSelection}`);
  console.log(`Winner: ${winner}`);
}

btn.addEventListener("click", playRound());
