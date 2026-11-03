const buttons = document.querySelectorAll("button");
const resultEl=document.getElementById("result");
const playerScoreEl=document.getElementById("user-score");
const computerScoreE1=document.getElementById("computer-score")

let playerScore = 0;
let computerScore =0;

buttons.forEach((button) => {
    button.addEventListener("click",()=> {
        const result = playRound(button.id,computerPlay());
        resultEl.textContent = result;
    })
})

function computerPlay(){
    const choices = ["rock","paper","scissor"];
    const randomChoice = Math.floor(Math.random()*choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection,computerSelection){
    if(playerSelection===computerSelection){return "it is a tie"}
    else if(
        (playerSelection==="rock" && computerSelection==="scissor")||
        (playerSelection==="paper" && computerSelection==="rock")||
        (playerSelection==="scissor" && computerSelection==="paper")
    ){
        playerScore++;
        playerScoreEl.textContent = playerScore;
        return "you win!" + "beats" + computerSelection;
        
    } else {
        computerScore++;
        computerScoreE1.textContent =computerScore;
        return "you lose!" + compututerSelection + "beats" + playerSelection;
    }
}