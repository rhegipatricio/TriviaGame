$(document).ready(function(){

	
//questions are hidden when page loads
	$("#triviaForm").hide();
//to begin game
	};
	$("#start").click(function(){
		$("#triviaForm").show();
		$("#start").hide();
		$("#header").hide();
		alert ("You've Started the game")
		console.log ("Trial")
	}

});

//variables
var correct 	= "0"
var incorrect 	= "0"
var unanswered 	= "0"

//countdown clock function
	var interval = setInterval(function(){
		var counter = 30;
		setInterval(function(){
			counter --;
			if(counter==0){
				clearInterval(interval);
			}
			console.log('clock', counter);
		}, 1 x 1000;
	}

});