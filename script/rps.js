var userScore =  0;
var oppScore = 0;
var roundCount = 1;
var computerChoice = ["Rock", "Paper", "Scissors"];
var playerChoice;

function gameLogic(playerChoice, computerChoice){
  if(playerChoice === "Rock" && computerChoice === 0){
    console.log("draw!");
  }else if (playerChoice === "Rock" && computerChoice === 1){
    console.log("You Lose :(");
  }else (playerChoice === "Rock" && computerChoice === 2)
    console.log("You Lose :(");
}

$(document).ready(function() {

  $(".gameButtons").on("click", function(){
    playerChoice = $(this).attr('data-choice');
    var randomIndex = Math.floor(Math.random()*computerChoice.length); 
    var oppChoice = computerChoice[randomIndex];
    gameLogic(playerChoice, computerChoice);
  
  });
});