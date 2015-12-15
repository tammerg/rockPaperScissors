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
    $(this).addClass("bigEntrance");
      $("#resultModal").modal('show').delay(3000);
        playerChoice = $(this).attr('data-choice');
        var randomIndex = Math.floor(Math.random()*computerChoice.length); 
        var oppChoice = computerChoice[randomIndex];
        gameLogic(playerChoice, oppChoice);
  });
  $(".leaders").on("click",function(){
    $(".tableBtn").fadeIn(3000);
  });
  $(".btn-primary").on("click",function(){
      $(".btn-primary").replaceWith("<h2>" + "Choose Your Weapon" + "</h2>");
        $("<h2>").fadeIn(7000);
  });
});
