// Variables
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

// Game display
colorDisplay.textContent = pickedColor;

// Game buttons

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
	}
});

// Starting logic for the game

for(i = 0; i < squares.length; i++){
	// Add initial colors to squares
	squares[i].style.background = colors[i];
	// Add click listeners to the squars
	squares[i].addEventListener("click", function(){
	// Get color of clicked square
	var clickedColor = this.style.background;
	// Compare color to pickedColor
	if(clickedColor === pickedColor){
		changeColors(clickedColor);
		h1.style.background = clickedColor;
		message.textContent = "Correct!"
		reset.textContent = "Play Again?"
	} else {
		this.style.background = "#232323";
		message.textContent = "Try Again!"
	}
	})
}

// Reset button

reset.addEventListener("click", function(){
	// Change text content
	reset.textContent = "New Colors";
	message.textContent = ""
	// Reset background
	h1.style.background = "steelblue";
	// Generate all new colors
	colors = generateRandomColors(numSquares);
	// Pick a new random color from array
	pickedColor = pickColor();
	// Change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";
	// Change the color of the squares
	for(i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	}
})

// Functions for the game

function changeColors(color){
	// Loop through all the squares
	for(var i = 0; i < squares.length; i++){
	// Change each color to match the winning color
	squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// Create the array
	var arr = [];
	// Repeat num times
	for(var i = 0; i < num; i++){
	// Generate random colors and push into the array
	arr.push(randomColor());
	}
	// Return the array
	return arr;
}

function randomColor(){
	// Generate a "Red" between 0 - 255
	var r = Math.floor(Math.random() * 256);
	// Generate a "Green" between 0 - 255
	var g = Math.floor(Math.random() * 256);
	// Generate a "Blue" between 0 - 255
	var b = Math.floor(Math.random() * 256);
	// Return the color
	return "rgb(" + r + ", " + g + ", " + b + ")";
}