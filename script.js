$(document).ready(function(){
  $('#resume').delay(250).animate({opacity: "1"}, 500);
  $('#linkedin').delay(500).animate({opacity: "1"}, 500);
  $('#photography').delay(750).animate({opacity: "1"}, 500);
  $('#recipes').delay(1000).animate({opacity: "1"}, 500);
  $('#projects').delay(1250).animate({opacity: "1"}, 500);
});

function expand_about() {
	if(!$('#aboutdiv').hasClass("visible")) {
		$('#about').css("background-color", "#537f24");
		$('#aboutdiv').css({"opacity": "1", "padding-top": "10px", "padding-bottom": "10px", "margin-top":"10px", "max-height": "500px"});
		$('#projectsdiv').css({"margin-top": "10px"});
		$('#aboutdiv').html("<h3> Welcome to me site! This is an old project of mine that helped me learn the basics of pure HTML/CSS/JS programming. I have since become intimately familiar with React...but haven't yet found the motivation to rewrite all of the stuff I have here. Feel free to poke around! </h3>");
		$('#aboutdiv').addClass("visible");
	} else {
		$('#aboutdiv').css({"opacity": "0", "max-height": "0px", "padding-top": "0px", "padding-bottom": "0px", "margin-top":"0px"});
		$('#about').css("background-color", "#d9d9e3");
		//$('#projectsdiv').css({"margin-top": "-20px"});
		$('#aboutdiv').html("");
		$('#aboutdiv').removeClass("visible");
	}
}

function expand_projects() {
	if(!$('#projectsdiv').hasClass("visible")) {
		$('#projects').css("background-color", "#537f24");
		$('#projectsdiv').css({"opacity": "1", "padding": "10px", "max-height": "500px"});
		$('#aboutprojects').css("opacity", "1");
		$('#projectsdiv').html("<span class='buttons'><button class='project_button' onclick='location.href=\"https://anathebealo.github.io/nqueens\"'>N-Queens</button>" +
							"<button class='project_button' onclick='location.href=\"https://anathebealo.github.io/data_structures\"'>Data Structure Tutorial</button></span>" + 
							"<span class='buttons'><button class='project_button' onclick='location.href=\"https://anathebealo.github.io/map/map.html\"'>Places I've been</button>" +
							"<button class='project_button' onclick='location.href=\"https://anathebealo.github.io/hashtables\"'>Hashtable Practice</button></span>" +
							"<span class='buttons'><button class='project_button' onclick='location.href=\"https://anathebealo.github.io/greedy\"'>Greedy Game</button>" +
							"<button class='project_button' onclick='location.href=\"https://anathebealo.github.io/graph_ai_algs\"'>Graph Algorithm Visualizer</button></span>");
		$('#projectsdiv').addClass("visible");
	} else {
		$('#projectsdiv').css({"opacity": "0", "padding": "0px", "max-height": "0px"});
		$('#projects').css("background-color", "#d9d9e3");
		$('#aboutprojects').css("opacity", "0");
		$('#aboutprojects').html("");
		$('#projectsdiv').removeClass("visible");
	}
}