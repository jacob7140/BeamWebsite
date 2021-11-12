var i = 0; 
var images = [];
var time = 8000;
	 
images[0] = "../images/Picture14.jpg";
images[1] = "../images/deere_cab.JPG";
images[2] = "../images/Picture16.png";
images[3] = "../images/Picture17.png";

function changeImg(){
	document.slide.src = images[i];

	if(i < images.length - 1){
	  i++; 
	} else { 
		i = 0;
	}

	setTimeout("changeImg()", time);
}

window.onload=changeImg;