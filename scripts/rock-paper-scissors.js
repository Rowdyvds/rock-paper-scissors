function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);

    if (random == 0) {
        return "rock";
    } else if (random == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock, paper of scissors?").toLowerCase();

    return playerChoice;
}

function playRound(computerChoice, playerChoice) {

    if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
        return "ERROR: wrong input";
    }

   switch(computerChoice) {
        case "rock":
            switch(playerChoice) {
                case "rock":
                    return "TIED";
                    break;
                case "paper":
                    return "PLAYER WINS";
                    break;
                case "scissors":
                    return "COMPUTER WINS";
                    break;
            }
            break;

        case "paper":
            switch(playerChoice) {
                case "paper":
                    return "TIED";
                    break;
                case "scissors":
                    return "PLAYER WINS";
                    break;
                case "rock":
                    return "COMPUTER WINS";
                    break;
            }
            break;

        case "scissors":
            switch(playerChoice) {
                case "scissors":
                    return "TIED";
                    break;
                case "rock":
                    return "PLAYER WINS";
                    break;
                case "paper":
                    return "COMPUTER WINS";
                    break;
            }
            break;
   }

   return null;
}


function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getComputerChoice(), getPlayerChoice()));
    }
}

game();