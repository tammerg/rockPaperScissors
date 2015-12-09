$(document).ready(function(){
  $("#changeWordBtn").on("click", function(){
    var myWords = ["Rock", "Paper", "Scissors"];
    var myRandomNumber = Math.floor(Math.random() * myWords.length)
      console.log(myRandomNumber);
  });
});