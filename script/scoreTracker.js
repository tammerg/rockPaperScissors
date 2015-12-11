$(document).ready(function(){
  var gameState = {
    userScore: 0, 
    computerScore: 0, 
    roundCount: 1
  }

  $(".btn-primary").on("click", function() {
    var tagName = $(this).attr("data-tag");
    gameState[tagName]++; 

    $("#" + tagName).html(gameState[tagName]);
  });
});