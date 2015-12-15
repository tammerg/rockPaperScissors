var userWins =  0;
var oppWins = 0;
var roundCount = 1;
var computerChoice = ["Rock", "Paper", "Scissors"];
var playerChoice;


function gameLogic(playerChoice, oppChoice) {
   roundCount++;
  $("#roundCount").html("Round:" + roundCount);
  if(playerChoice === oppChoice){
    $("#result").html("You got a tie!" + "Oppenent Chose:" + oppChoice);
} else if (playerChoice === "Rock"){
  if(oppChoice === "Paper"){
    $("#result").html("You Lose!" + "Oppenent Chose:" + oppChoice);
    oppWins++;
  }else {
    $("#result").html("You Win!" + "Oppenent Chose:" + oppChoice);
    userWins++;
      $("#userWins").html("User Wins:" + userWins);
  }
}
  else if (playerChoice === "Paper"){
    if(oppChoice === "Rock"){
      $("#result").html("You Win!" + "Oppenent Chose:" + oppChoice);
      userWins++;
        $("#userWins").html("User Wins:" + userWins);
  }else {
    $("#result").html("You Lose!" + "Oppenent Chose:" + oppChoice);
    oppWins++;
      $("#oppWins").html("Computer Wins:" + oppWins);
  }
}
  else if (playerChoice === "Scissors"){
    if(oppChoice === "Paper"){
      $("#result").html("You Win!" + "Oppenent Chose:" + oppChoice);
      userWins++;
  }else {
    $("#result").html("You Lose!" + "Oppenent Chose:" + oppChoice);
    oppWins++;
      $("#oppWins").html("Computer Wins:" + oppWins);
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
  $(".btn-primary").on("click", function() {
    var v1 = $("<h2>").html("Choose your weapon").fadeIn(1500);
      $(".startBtn").empty();
        $(".startBtn").append(v1).addClass(red);

  });
});
