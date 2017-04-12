// Player 1
var p1Button    = document.querySelector("#p1");
var p1Display   = document.querySelector("#p1Display");
var p1Score     = 0;

// Player 2
var p2Button    = document.querySelector("#p2");
var p2Display   = document.querySelector("#p2Display");
var p2Score     = 0;

// Scoreboard Variables
var resetButton = document.querySelector("#resetButton");
var gameOver    = false;
var winingScore = 5;
var numInput    = document.querySelector("input");
var playTo      = document.querySelector("#playTo");

// Player 1 logic
p1Button.addEventListener("click", function(){
	if(!gameOver) {
		p1Score++;
		if(p1Score === winingScore){
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});

// Player 2 logic
p2Button.addEventListener("click", function(){
	if(!gameOver) {
		p2Score++;
		if(p2Score === winingScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});

// Reset function
function reset(){
	p1Score = 0;
	p1Display.textContent = p1Score;
	p1Display.classList.remove("winner");
	p2Score = 0;
	p2Display.textContent = p2Score;
	p2Display.classList.remove("winner");
	gameOver = false;
}

// Reset logic
resetButton.addEventListener("click", function(){
	reset();
})

// Playing to what score logic
numInput.addEventListener("change", function(){
	playTo.textContent = numInput.value;
	winingScore = Number(numInput.value);
	reset();
})
