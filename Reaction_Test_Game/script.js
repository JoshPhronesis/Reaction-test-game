var start = new Date().getTime();
appear();

function randomColor(){
	var alphanumericCharacters = "0123456789ABCDEF".split("");
	var color = "#"
	for (var i = 0; i < 6; i++) {
		color = color + alphanumericCharacters[Math.floor(Math.random()*16)];
	}
	return color;
}
function appear(){
	var breadth = document.getElementById("shape").style.width=(Math.random()*200)+100 + "px";
	document.getElementById("shape").style.height=breadth;
	document.getElementById("shape").style.top=Math.random()*200 + "px";
	document.getElementById("shape").style.left=Math.random()*200 + "px";
	document.getElementById("shape").style.backgroundColor = randomColor();
	if (Math.random()<0.5) {
		document.getElementById("shape").style.borderRadius = "50%";
	}
	else{
		document.getElementById("shape").style.borderRadius = 0;
	}
	setTimeout(makeShape, Math.random()*2000);
}
function makeShape(){
	document.getElementById("shape").style.display="block"
	start=new Date().getTime();
}
document.getElementById("shape").onclick=function() {
	document.getElementById("shape").style.display = "none";
	var stop  = new Date().getTime();
	var time = (stop - start)/1000;
	document.getElementById("timeTaken").innerHTML = time + "s";
	appear();
}

