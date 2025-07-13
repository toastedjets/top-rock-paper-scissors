/*
**Function: getComputerChoice()
**Params: NONE
**Return value: computerChoice
**Description:
**The function getComputerChoice() uses a random number to determine
**what the computer's choice should be: either rock, paper, or scissors.
*/
function getComputerChoice() {
    let numComputerChoice = Math.floor(Math.random() * 3) + 1;
    let computerChoice = "";
    if (numComputerChoice === 1) computerChoice = "rock"
    else if (numComputerChoice === 2) computerChoice = "paper"
    else computerChoice = "scissors";
    return computerChoice;
}

/*
**Function: getHumanChoice()
**Params: NONE
**Return value: humanChoice
**Description:
**The function getHumanChoice() gets the user input for either rock, paper,
**or scissors.
*/
function getHumanChoice() {
    let humanChoice =
        prompt('Choose either "rock", "paper", or "scissors" by typing it in');
    return humanChoice;
}

/*
**Function: run()
**Params: NONE
**Return value: NONE
**Description:
**The function run() allows for the script to run
*/
function run() {
    playGame(); 
}

/*
**Function: playGame()
**Params: NONE
**Return value: NONE
**Description:
**The function playGame() plays the game for 5 rounds
*/
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    let winner = "";

    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        playRound(humanChoice, computerChoice);
        console.log(`Scores:\nComputer: ${computerScore}\nHuman: ${humanScore}`);
    }

    if (computerScore > humanScore) winner = "Computer";
    else if (computerScore < humanScore) winner = "Human";
    else winner = "Draw";

    console.log(`The winner is: ${winner}`);

    /*
    **Function: playRound()
    **Params: humanChoice, computerChoice
    **Return Value: NONE
    **Description:
    **The function playRound() plays 1 round of rock, paper, scissors
    */
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        let winnerMessage = "";
        
        if (humanChoice === "rock") {
            if (computerChoice === "rock") winnerMessage = "Draw!";
            
            else if (computerChoice === "paper") {
                winnerMessage = "You lose! Paper beats rock!";
                computerScore++;
            }
            
            else if (computerChoice === "scissors") {
                winnerMessage = "You win! Rock beats scissors.";
                humanScore++;
            }
        }

        else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                winnerMessage = "You win! Paper beats rock.";
                humanScore++;
            }

            else if (computerChoice === "paper") winnerMessage = "Draw!";

            else if (computerChoice === "scissors") {
                winnerMessage = "You lose! Scissors beats paper.";
                computerScore++;
            }
        }

        else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                winnerMessage = "You lose! Rock beats scissors.";
                computerScore++;
            }

            else if (computerChoice === "paper") {
                winnerMessage = "You win! Scissors beats paper.";
                humanScore++;
            }

            else if (computerChoice === "scissors") winnerMessage = "Draw!";
        }

        console.log(winnerMessage);
    }
}
run();