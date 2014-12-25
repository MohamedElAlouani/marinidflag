$(document).ready(function() {

	var flagClicked = false;

	$("#flag").click(function() {

		if (!flagClicked) {
			$("#firstSquare").css("transform", "rotate(1080deg)");
			$("#secondSquare").css("transform", "rotate(2205deg)");
			flagClicked = true	
		}

		else {
			$("#firstSquare").css("transform", "rotate(0deg)");
			$("#secondSquare").css("transform", "rotate(45deg)")			
			flagClicked = false;		
		}	

		$("#userInput").css("opacity", "1");	

	});

	var badnesses = ["michaelJacksonBad", "realBad", "prettyBad", "meh", "iHaveVertigo"]
	var speeds = [[0.5, 0.7], [1, 1.2], [2, 2.2], [4, 4.4], [30, 31]] //sets of value that will be fed to the transition attribute

	$(".button").click(function() {

		$(this).css("border", "4px solid #f7f94d")
		$(this).siblings().css("border", "0px solid #f7f94d") //removes borders from all buttons except the one clicked

		var badnessIndex = badnesses.indexOf($(this).attr("id"));
		console.log(badnessIndex)
		var firstSpeed = speeds[badnessIndex][0];
		var secondSpeed = speeds[badnessIndex][1];

		$("#firstSquare").css("transition", "transform " + firstSpeed + "s ease");
		$("#secondSquare").css("transition", "transform " + firstSpeed + "s ease");

		$("#message").css("opacity", "1")
		setTimeout(function() {
			$("#message").css("opacity", "0")
		}, 200);

			
	});

})