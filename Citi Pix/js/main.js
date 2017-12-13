$( document ).ready(function() {
  // Handler for .ready() called.
  
$("#city").submit(function(event) {
  event.preventDefault();

var cityChoice = $("#city-type").val();
event.preventDefault();

if (cityChoice === "NYC" || cityChoice === "New York" || cityChoice === "New York City"){
	$("body").addClass("nyc");
	$("body").removeClass("sf");
	$("body").removeClass("la");
	$("body").removeClass("austin");
	$("body").removeClass("sydney");
} else if (cityChoice === "San Francisco" || cityChoice === "SF" || cityChoice === "Bay Area"){
	$("body").addClass("sf");
	$("body").removeClass("nyc");
	$("body").removeClass("la");
	$("body").removeClass("austin");
	$("body").removeClass("sydney");
} else if (cityChoice === "Los Angeles" || cityChoice === "LA" || cityChoice === "LAX"){
	$("body").addClass("la");
	$("body").removeClass("nyc");
	$("body").removeClass("sf");
	$("body").removeClass("austin");
	$("body").removeClass("sydney");
} else if (cityChoice === "Austin" || cityChoice === "ATX"){
	$("body").addClass("austin");
	$("body").removeClass("nyc");
	$("body").removeClass("sf");
	$("body").removeClass("la");
	$("body").removeClass("sydney");
} else if (cityChoice === "Sydney" || cityChoice === "SYD"){
	$("body").addClass("sydney");
	$("body").removeClass("nyc");
	$("body").removeClass("la");
	$("body").removeClass("sf");
	$("body").removeClass("austin");
}
console.log(cityChoice);

});

});






