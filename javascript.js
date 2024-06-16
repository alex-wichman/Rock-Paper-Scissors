
function playGame(humanChoice, computerChoice) 
{
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) 
    {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice == "rock" && computerChoice == "paper")
            {
                console.log("You Lose! paper beats rock");
                computerScore++;
                return;

            }
        if (humanChoice == "paper" && computerChoice == "rock")
            {
                console.log("You Win! paper beats rock");
                humanScore++;
                return;

            }
        if (humanChoice == "scissors" && computerChoice == "paper")
            {
                console.log("You Win! scissors beats paper");
                humanScore++;
                return;

            }
        if (humanChoice == "paper" && computerChoice == "scissors")
            {
                console.log("You Lose! scissors beats paper");
                computerScore++;
                return;

            }
        if (humanChoice == "rock" && computerChoice == "scissors")
            {
                console.log("You Win! rock beats scissors");
                humanScore++;
                return;

            }
        if (humanChoice == "scissors" && computerChoice == "rock")
            {
                console.log("You Lose! rock beats scissors");
                computerScore++;
                return;
            }
        
        console.log("You tie!");
        return;

    }
   
    for (let i = 0; i < 5;  i++)
        {
            computerChoice = getComputerChoice();
            humanChoice = getHumanChoice();
            playRound(humanChoice,computerChoice);
        }

        console.log("final scores: Computer: " + computerScore + " Human: " + humanScore);
}

function getComputerChoice() 
{
    let choice = Math.random();
    let computerChoice;
    
    if (choice <= .333)
        {
            computerChoice = "rock";
        }
    if (choice >= .333 && choice <= .666)
        {
            computerChoice = "paper";
        }
    if (choice >= .666)
        {
            computerChoice = "scissors";
        }

    return computerChoice;
}

function getHumanChoice()
{
    let getHumanChoice = prompt("Enter your choice: ");
    return getHumanChoice;

}



let computerChoice;
let humanChoice;



playGame(humanChoice, computerChoice);

