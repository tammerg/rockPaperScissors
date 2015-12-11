
$(document).ready(function(){
  var userScore = 0, computerScore = 0, roundCount = 1;
  $("#incUserBtn").on("click", function(){
    userScore++;
    $("#userScore").html(userScore);

  });


});