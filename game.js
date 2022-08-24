var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];

function nextSequence(){
  var randomNumber=Math.floor(Math.random()*4);
  return randomNumber;
}

var randomChosenColour=buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);

$("#"+randomChosenColour).fadeOut(100).fadeIn(100);
