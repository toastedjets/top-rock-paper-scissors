(function() {
    let humanScore = 0;
    let computerScore = 0;

    const buttonRock = document.getElementById("rock");
    const buttonPaper = document.getElementById("paper");
    const buttonScissors = document.getElementById("scissors");

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
        if (numComputerChoice === 1) return "rock"
        else if (numComputerChoice === 2) return "paper"
        else return "scissors";
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
        function buttonHandler(event) {
            const clickedButton = event.target.id;
            const computerChoice = getComputerChoice();
            playRound(clickedButton, computerChoice); 

        }

        buttonRock.addEventListener("click", buttonHandler);
        buttonScissors.addEventListener("click", buttonHandler);
        buttonPaper.addEventListener("click", buttonHandler);
    }

    /*
    **Function: run()
    **Params: NONE
    **Return value: NONE
    **Description:
    **The function run() allows for the script to run
    */
    function run() {
        getHumanChoice();
    }

    /*
    **Function: playRound()
    **Params: humanChoice, computerChoice
    **Return Value: NONE
    **Description:
    **The function playRound() plays 1 round of rock, paper, scissors
    */
    function playRound(humanChoice, computerChoice) {
        let results = getResultsDiv();
        
        if (humanChoice === "rock") {
            if (computerChoice === "rock") results.textContent =
                `Draw | Computer: ${computerScore} | You: ${humanScore}`;
            
            else if (computerChoice === "paper") {
                computerScore++;
                results.textContent =
                    `You lose! Paper beats rock! | Computer: ${computerScore} | You: ${humanScore}`;
            }
            
            else if (computerChoice === "scissors") {
                humanScore++;
                results.textContent =
                `You win! Rock beats scissors. | Computer: ${computerScore} | You: ${humanScore}`;

            }
        }

        else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                humanScore++;
                results.textContent =
                    `You win! Paper beats rock. | Computer: ${computerScore} | You: ${humanScore}`;
            }

            else if (computerChoice === "paper") results.textContent =
                `Draw! | Computer: ${computerScore} | You: ${humanScore}`;

            else if (computerChoice === "scissors") {
                computerScore++;
                results.textContent =
                    `You lose! Scissors beats paper. | Computer: ${computerScore} | You: ${humanScore}`;
            }
        }

        else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                computerScore++;
                results.textContent =
                    `You lose! Rock beats scissors. | Computer: ${computerScore} | You: ${humanScore}`;
            }

            else if (computerChoice === "paper") {
                humanScore++;
                results.textContent =
                    `You win! Scissors beats paper. | Computer: ${computerScore} | You: ${humanScore}`;
            }

            else if (computerChoice === "scissors") results.textContent =
                `Draw! | Computer: ${computerScore} | You: ${humanScore}`;
        }

        if (computerScore === 5) {
            results.textContent += ` | The winner is: Computer!`
        }

        else if (humanScore === 5) {
            results.textContent += ` | The winner is: You!`;
        }
    }

    function getResultsDiv() {
        const results = document.getElementById("results");
        return results;
    }
run();
})();