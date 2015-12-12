
var userScore =  0;
var oppScore = 0;
var roundCount = 1;
var computerChoice = ["Rock", "Paper", "Scissors"];
var playerChoice;


function gameLogic(playerChoice, oppChoice) {
  if(playerChoice === oppChoice){
    console.log("You got a tie!");
} else if (playerChoice === "Rock"){
  if(oppChoice === "Paper"){
    console.log("You Lose :(");
  }else {
    console.log("You Win");
  }
}
  else if (playerChoice === "Paper"){
    if(oppChoice === "Rock"){
      console.log("You Win :)");
  }else {
    console.log("You Lose!");
  }
}
  else if (playerChoice === "Scissors"){
    if(oppChoice === "Paper"){
      console.log("You Win :)");
  }else {
    console.log("You Lose!");
  }
}
} 
$(document).ready(function() {

  $(".gameButtons").on("click", function(){
    playerChoice = $(this).attr('data-choice');
    var randomIndex = Math.floor(Math.random()*computerChoice.length); 
    var oppChoice = computerChoice[randomIndex];
    gameLogic(playerChoice, oppChoice);
    
  });
});
