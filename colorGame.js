var numSqr = 6;
var colors = generateRandomColors(numSqr);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');


easyBtn.addEventListener('click', function(){
	hardBtn.classList.remove('selected');
	easyBtn.classList.add('selected');
	numSqr = 3;
	colors = generateRandomColors(numSqr);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor; 
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
	}
});

hardBtn.addEventListener('click', function(){
	hardBtn.classList.add('selected');
	easyBtn.classList.remove('selected');
	numSqr = 6;
	colors = generateRandomColors(numSqr);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor; 
	for (var i = 0; i < squares.length; i++) {
	    squares[i].style.backgroundColor = colors[i];
	    squares[i].style.display = 'block';
		}
   
});

resetButton.addEventListener('click', function(){
	// generate all new colors
	colors = generateRandomColors(numSqr);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	// clear messageDisplay when you reset game
	messageDisplay.textContent = "";
	// change resetButton back to Origional State
	this.textContent = "New Colors";
	// change colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
	// add initial color to squares
	squares[i].style.backgroundColor = colors[i]

	 //add click listeners to squares
	 squares[i].addEventListener('click', function(){
	 	// grab color of clikced square
	 	var clickedColor = this.style.backgroundColor;
	 	// compare to pickedColor
	 	if(clickedColor === pickedColor){
	 		messageDisplay.textContent = 'Correct!'; 
	 		resetButton.textContent = "Play Again?"
	 		changeColors(clickedColor);
	 		h1.style.background = clickedColor;
	 	} else {
	 		this.style.background = '#232323';
	 		messageDisplay.textContent = 'Try Again';
	 	}
	});
} 

function changeColors(color){
	// loop through all squares
	for (var i = 0; i < squares.length; i++) {
	// change each color to match given color
   squares[i].style.backgroundColor = color;
	}
	};

	function pickColor() {
		var random = Math.floor(Math.random() * colors.length);
		return colors[random];
	}
 
 function generateRandomColors(num) {
 	// make an array
 	var arr = [];
 	// add random colors to array
 	for (var i = 0; i < num; i++) {
 		// get random color and push into arr
 		arr.push(randomColor())
 	}
 	// return that array
 	return arr;
 }

 function randomColor() {
 	// pick a 'red' from 0-255
 	var r =Math.floor(Math.random() * 256);
 	// pick a 'green' from 0-255
 	var g =Math.floor(Math.random() * 256);
 	// picka 'blue' from 0-255
 	var b =Math.floor(Math.random() * 256);
 	return "rgb(" + r + ", " + g + ", " + b + ")";
 }