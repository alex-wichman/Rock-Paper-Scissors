
let humanScore = 0;
let computerScore = 0;
let compChoice;
let gameCount = 0

document.getElementById('ys').textContent = humanScore;
document.getElementById('cs').textContent = computerScore;

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


function playRound() 
{
    let humanChoice = document.getElementById('you').textContent;
    let computerChoice = document.getElementById('comp').textContent;
    let message;
    if (humanChoice == "rock" && computerChoice == "paper")
        {
            message = "You Lose! paper beats rock";
            computerScore++;
            

        }
    else if (humanChoice == "paper" && computerChoice == "rock")
        {
            message = "You Win! paper beats rock";
            humanScore++;
            

        }
    else if (humanChoice == "scissors" && computerChoice == "paper")
        {
            message = "You Win! scissors beats paper";
            humanScore++;
            

        }
    else if (humanChoice == "paper" && computerChoice == "scissors")
        {
            message = "You Lose! scissors beats paper";
            computerScore++;
            

        }
    else if (humanChoice == "rock" && computerChoice == "scissors")
        {
            message = "You Win! rock beats scissors";
            humanScore++;
            

        }
    else if (humanChoice == "scissors" && computerChoice == "rock")
        {
            message = "You Lose! rock beats scissors";
            computerScore++;
            
        }
    else {
        message = "You tie!"; }
    
    document.getElementById('ys').textContent = humanScore;
    document.getElementById('cs').textContent = computerScore;
    gameCount++;
    document.getElementById('gameCt').textContent = "Games Played: " + gameCount;
    return message;

}

function printCompChoice(compChoice)
{
    if (compChoice == 'rock')
    {
        document.getElementById('comp').textContent = 'rock';
    }

    if (compChoice == 'paper')
    {
        document.getElementById('comp').textContent = 'paper';
    }
    if (compChoice == 'scissors')
    {
        document.getElementById('comp').textContent = 'scissors';
    }

}

function printMessage(message)
{
    document.getElementById('msg').textContent = message;
}

document.getElementById('Rock').onclick = function(){
    document.getElementById('you').textContent = "rock";
    compChoice = getComputerChoice();
    printCompChoice(compChoice);
    message = playRound();
    printMessage(message);

}

document.getElementById('Paper').onclick = function(){
    document.getElementById('you').textContent = 'paper';
    compChoice = getComputerChoice();
    printCompChoice(compChoice);
    message = playRound();
    printMessage(message);
}

document.getElementById('Scissors').onclick = function(){
    document.getElementById('you').textContent = 'scissors';
    compChoice = getComputerChoice();
    printCompChoice(compChoice);
    message = playRound();
    printMessage(message);
}
   
document.getElementById('reset').onclick = function(){
    humanScore = 0;
    computerScore = 0;
    document.getElementById('ys').textContent = humanScore;
    document.getElementById('cs').textContent = computerScore;
    document.getElementById('msg').textContent = "Let's play rock-paper-scissors!";
    document.getElementById('comp').textContent = '';
    document.getElementById('you').textContent = '';
    document.getElementById('gameCt').textContent = "Games Played: 0";
}
    
