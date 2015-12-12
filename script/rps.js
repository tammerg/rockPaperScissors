var userScore =  0;
var oppScore = 0;
var roundCount = 1;
var computerChoice = ["Rock", "Paper", "Scissors"];
var playerChoice;

function gameLogic(playerChoice, computerChoice){}

$(document).ready(function() {

  $(".gameButtons").on("click", function(){
    playerChoice = $(this).attr('data-choice');
    var randomIndex = Math.floor(Math.random()*computerChoice.length); 
    var oppChoice = computerChoice[randomIndex];
    gameLogic(playerChoice, computerChoice);
    console.log('Player: '+playerChoice);
    console.log('Computer: '+oppChoice);
  });
});