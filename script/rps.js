
var userScore =  0;
var oppScore = 0;
var roundCount = 1;
var computerChoice = ["Rock", "Paper", "Scissors"];
var playerChoice;


function gameLogic(playerChoice, oppChoice) {
  if(playerChoice === oppChoice){
    $("#result").html("You got a tie!");
} else if (playerChoice === "Rock"){
  if(oppChoice === "Paper"){
    $("#result").html("You Lose");
  }else {
    $("#result").html("You Win");
  }
}
  else if (playerChoice === "Paper"){
    if(oppChoice === "Rock"){
      $("#result").html("You Win");
  }else {
    $("#result").html("You Lose!");
  }
}
  else if (playerChoice === "Scissors"){
    if(oppChoice === "Paper"){
      $("#result").html("You Win");
  }else {
    $("#result").html("You Lose");
  }
}
} 
$(document).ready(function() {

  $(".gameButtons").on("click", function(){
    $("#resultModal").modal('show');
    playerChoice = $(this).attr('data-choice');
    var randomIndex = Math.floor(Math.random()*computerChoice.length); 
    var oppChoice = computerChoice[randomIndex];
    gameLogic(playerChoice, oppChoice);
    
  });
});
