var userScore =  0;
var oppScore = 0;
var roundCount = 1;
var computerChoice = ["Rock", "Paper", "Scissors"];
var playerChoice;
var randomIndex = Math.floor(Math.random()*computerChoice.length); 
var oppChoice = computerChoice[randomIndex];

function gameLogic(playerChoice, computerChoice){
  console.log(playerChoice, oppChoice);
}
$(document).ready(function() {

  $(".gameButtons").on("click", function(){
    playerChoice = $(this).attr('data-choice');
    gameLogic(playerChoice, computerChoice);
  
  });
});