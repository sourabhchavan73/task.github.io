var box1 = document.getElementById("square-1");
var box2 = document.getElementById("square-2");
var box3 = document.getElementById("square-3");
var box4 = document.getElementById("square-4");
var image = document.querySelector(".logo-img")
var button1 = document.querySelector("#btn-1");
var button2 = document.querySelector("#btn-2");
var play = true;
disPlay();

document.getElementById("square-1").addEventListener("click", function(){
	square1();
})

	document.getElementById("square-2").addEventListener("click", function(){
	square2();
})
	document.getElementById("square-3").addEventListener("click", function(){
	square3();
})
	document.getElementById("square-4").addEventListener("click", function(){
	square4();
})

button1.addEventListener("click", function(){
	button1Reset();
	square1();
	square2();
	square3();
	square4();
})

button2.addEventListener("click", function(){
	button2Reset();
	square1();
	square2();
	square3();
	square4();
})

function disPlay(){
button1.style.display = "none";
button2.style.display = "none";
document.getElementById("square-date-1").style.display = "none";
document.getElementById("square-date-2").style.display = "none";
document.getElementById("square-date-3").style.display = "none";
document.getElementById("square-date-4").style.display = "none";
}


function square1 (){
	if (play){
	box2.style.backgroundColor = "#001f3f";
	box3.style.backgroundColor = "#001f3f";
	box4.style.backgroundColor= "#001f3f";
	image.style.display = "none";
	button1.style.display = "block";
	document.getElementById("s-1").style.display = "block";
	image.classList.add("afterimg");
	document.getElementById("square-date-1").style.display = "block";
	image.classList.add("logo-img-after");
	image.style.display = "block";
	}
	play = false;
}

function square2(){
	if (play){
	box1.style.backgroundColor = "#85144b";
	box3.style.backgroundColor = "#85144b";
	box4.style.backgroundColor = "#85144b";
	image.style.display = "none";
	button1.style.display = "block";
	document.getElementById("s-2").style.display = "block";
	document.getElementById("square-date-2").style.display = "block";
	image.classList.add("logo-img-after");
	image.style.display = "block";

	}
	play = false;
}

function square3(){
	if (play){
	box1.style.backgroundColor = "#7FDB";
	box2.style.backgroundColor = "#7FDB";
	box4.style.backgroundColor = "#7FDB";
	image.style.display = "none";
	button1.style.display = "block";
	document.getElementById("s-3").style.display = "block";
	document.getElementById("square-date-2").style.display = "block";
	image.classList.add("logo-img-after");
	image.style.display = "block";

	}
	play = false;
}

function square4(){
	if (play){
	box2.style.backgroundColor = "#39CC";
	box3.style.backgroundColor = "#39CC";
	box1.style.backgroundColor= "#39CC";
	image.style.display = "none";
	button1.style.display = "block";
	document.getElementById("s-4").style.display = "block";
	document.getElementById("square-date-4").style.display = "block";
	image.classList.add("logo-img-after");
	image.style.display = "block";
	}
	play = false;
}

function button2Reset(){
	box1.style.backgroundColor = "#001f3f";
	box2.style.backgroundColor = "#85144b";
	box3.style.backgroundColor = "#7FDB";
	box4.style.backgroundColor = "#39CC";
	image.style.display = "block";
	image.classList.add("afterimg");
	button1.style.display = "none";
	document.getElementById("square-date-1").style.display = "none";
	document.getElementById("square-date-2").style.display = "none";
	document.getElementById("square-date-3").style.display = "none";
	document.getElementById("square-date-4").style.display = "none";
	image.classList.remove("logo-img-after");
}

function button1Reset(){
	box1.style.backgroundColor = "#001f3f";
	box2.style.backgroundColor = "#85144b";
	box3.style.backgroundColor = "#7FDB";
	box4.style.backgroundColor = "#39CC";
	image.style.display = "block";
	image.classList.add("afterimg");
	button1.style.display = "none";
	document.getElementById("square-date-1").style.display = "none";
	document.getElementById("square-date-2").style.display = "none";
	document.getElementById("square-date-3").style.display = "none";
	document.getElementById("square-date-4").style.display = "none";
	image.classList.remove("logo-img-after");
}



