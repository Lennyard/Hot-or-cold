var guesses = [];
var numToGuess;
var guessCount = 0;
var difference;


var getRandomNum = function() {
		var number = Math.floor(Math.random() * 101);
		return number;
	};

var newGame = function() {
	numToGuess = getRandomNum();
	//$("#count").
}
$(document).ready(function(){

	$("#guessButton").click(function(){
		guesses.push($("#userGuess").val());
		//$("#guessList").append(guess);
		$("#guessList").append(guesses[guesses.length - 1]);
	});

	$("a.new").click(function(){
		newGame();
	});

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  	newGame();
});


