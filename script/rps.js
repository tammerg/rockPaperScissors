window.rockPaperScissors = {
  gameState: {
    userScore = 0,
    oppScore = 0,
    roundCount = 1,
    buttonChoice = ["Rock", "Paper", "Scissors"]
    }
}
$(document).ready(function() {

  $(".gameButtons").on("click", function({
    var computerChoice = Math.floor(Math.random() * buttonChoice.length);
    
    if (computerChoice) === parseInt($(this).attr("data-selection")))
      }
  });
});