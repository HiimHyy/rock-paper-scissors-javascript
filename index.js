// Define array of possible choices
const choices = ["rock", "paper", "scissors"];

// Function for computer to randomly select
function computerRandom() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function that gets user input
function getUserInput() {
    return prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
    return "tie";
    } else if (userChoice === "rock") {
    if (computerChoice === "scissors") {
        return "user";
    } else {
        return "computer";
    }
    } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
        return "user";
    } else {
        return "computer";
    }
    } else if (userChoice === "scissors") {
    if (computerChoice === "paper") {
        return "user";
    } else {
        return "computer";
    }
    }
}

let userWins = 0;
let computerWins = 0;

// Play 5 rounds
for (let i = 0; i < 5; i++) {
    const userChoice = getUserInput();
    const computerChoice = computerRandom();
    const winner = determineWinner(userChoice, computerChoice);

    console.log(`Round ${i + 1}: You chose ${userChoice}, the computer chose ${computerChoice}.`);

    if (winner === "user") {
    userWins++;
    console.log("You win this round!");
    } else if (winner === "computer") {
    computerWins++;
    console.log("You lose this round!");
    } else {
    console.log("This round is a tie!");
    }
}

console.log("The final score is:");
console.log(`You: ${userWins}`);
console.log(`Computer: ${computerWins}`);

if (userWins > computerWins) {
    console.log("You are the overall winner!");
} else if (computerWins > userWins) {
    console.log("The computer is the overall winner.");
} else {
    console.log("The game ended in a tie.");
}
