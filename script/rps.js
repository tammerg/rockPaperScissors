var userScore =  0;
var oppScore = 0;
var roundCount = 1;
var computerChoice = ["Rock", "Paper", "Scissors"];
var playerChoice;

$(document).ready(function() {

  $(".gameButtons").on("click", function(){
    playerChoice = $(this).attr('data-choice');
    console.log(playerChoice);  
  });
  var
});