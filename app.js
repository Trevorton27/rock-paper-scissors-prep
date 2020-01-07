let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const finalScore_div = document.getElementById("finalScore_div");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

function changeToWord(letter) {
    if(letter === 'r') {
        return 'rock'
    }
    if(letter === 'p') {
        return 'paper'
    }
    return 'scissors';
};


function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    console.log("you won dawg! Your score is " + userScore);
    result_p.innerHTML = "You chose " + changeToWord(userChoice) + " the computer chose " + changeToWord(computerChoice) + ". You win.";
};

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    console.log("you lost dawg!");
    result_p.innerHTML = "You chose " + changeToWord(userChoice) + " the computer chose " + changeToWord(computerChoice) + ". You lost.";
};

function tie(userChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    console.log("its a tie dawg!");
    result_p.innerHTML = "Both you and the computer chose " + changeToWord(userChoice) + ". It's a tie.";
};

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'ss':
        case 'pp':
            tie(userChoice, computerChoice);
            break;
    }
    console.log("The computers choice is " + computerChoice);
    console.log("Your choice is " + userChoice);
}

function main() {
    rock_div.addEventListener("click", () => game("r"));

    paper_div.addEventListener("click", () => game("p"));

    scissors_div.addEventListener("click", () => game("s"));
};

function displayFinalScore() {
    const userWins = `Final score is ${userScore} to ${computerScore}. You win!`;
    const computerWins = `Final score is ${userScore} to ${computerScore}. Hate to say it but you lost.`;
    const tie = `Final score is ${userScore} to ${computerScore}. It's a tie.`;
    if(userScore > computerScore) {
       finalScore_div.innerHTML = userWins;
    } else if (userScore === computerScore) {
        finalScore_div.innerHTML = tie;
    } else  {
        finalScore_div.innerHTML = computerWins;
    }
    
};

main();