
function computerPlay() {
    let a = Math.floor(Math.random() * 9);
    if (a < 3) return "r";
    else if (a < 6) return "p";
    else return "s"
}

function round() {
    playerSelection = prompt("Select Rock(r) , Paper(p) , Scissor (s) :");
    computerSelection = computerPlay();
    if (playerSelection == computerSelection) {
        console.log("It's a draw! Both chose %s", computerSelection);
        return 0;
    }
    if ((playerSelection == "r" && computerSelection == "s") || (playerSelection == "s" && computerSelection == "p") || (playerSelection == "p" && computerSelection == "r")) {
        console.log("You win! %s beats %s", playerSelection, computerSelection);
        return 1;
    }
    else {
        console.log("You lose! %s lost to %s", playerSelection, computerSelection);
        return -1;
    }
}

function game() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        result = round();
        score += result;
    }
    console.log('Final score is %s', score);
}

game();

