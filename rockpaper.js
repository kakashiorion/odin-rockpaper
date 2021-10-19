
function computerPlay() {
    let a = Math.floor(Math.random() * 9);
    if (a < 3) return "r";
    else if (a < 6) return "p";
    else return "s"
}

let playerSelection = "r";
let computerSelection = "r";
let playerScore = 0;
let computerScore = 0;

function round() {
    //playerSelection = prompt("Select Rock(r) , Paper(p) , Scissor (s) :");

    computerSelection = computerPlay();
    if (playerSelection == computerSelection) {
        document.querySelector("#resultText").textContent = `It's a draw! Both chose ${playerSelection}`;
        //console.log("It's a draw! Both chose %s", computerSelection);
        //return 0;
    } else if ((playerSelection == "r" && computerSelection == "s") || (playerSelection == "s" && computerSelection == "p") || (playerSelection == "p" && computerSelection == "r")) {
        document.querySelector("#resultText").textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore += 1;
        document.querySelector("#playerScore").textContent = `${playerScore}`;
        if (playerScore == 5) alert("You Win!");
        //console.log("You win! %s beats %s", playerSelection, computerSelection);
        //return 1;
    }
    else {
        document.querySelector("#resultText").textContent = `You lose! ${playerSelection} lost to ${computerSelection}`;
        computerScore += 1;
        document.querySelector("#computerScore").textContent = `${computerScore}`;
        if (computerScore == 5) alert("You Lose!");

        //console.log("You lose! %s lost to %s", playerSelection, computerSelection);
        //return -1;
    }
}

// function game() {
//     let score = 0;
//     for (let i = 0; i < 5; i++) {
//         result = round();
//         score += result;
//     }
//     console.log('Final score is %s', score);
// }

//game();



const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissor");

rockButton.addEventListener('click', () => {
    playerSelection = "r";
    round();
});

paperButton.addEventListener('click', () => {
    playerSelection = "p";
    round();
});

scissorButton.addEventListener('click', () => {
    playerSelection = "s";
    round();
});

