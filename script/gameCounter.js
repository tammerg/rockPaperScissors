window.rockPaperScissors = {
  gameState: {
    userScore: 0,
    computerScore: 0,
    roundCount: 1
  }
}
$(document).ready(function() {
  var myWords = ["Rock", "Paper", "Scissors"];

  $("#changeWordBtn").on("click", function() {
    var myRandomNumber = Math.floor(Math.random() * myWords.length);
    $("h1").fadeIn(250, function() {
      $(this).html(myWords[myRandomNumber]);
      $(this).fadeOut(1000);
    });
    
  });
});