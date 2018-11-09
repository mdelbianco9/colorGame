var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeBtns = document.querySelectorAll('.mode');

init();

function reset(){
	// Generate all new colors
	colors = generateRandomColors(numSquares);
	// Pick new randoms color
	pickedColor = pickColor();
	// Chnage color display to ppciekd color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
		// change colors of squares
	for(i=0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];
		}else {
			squares[i].style.display = 'none';
		}
	}
	h1.style.backgroundColor = '#232323';
}

resetButton.addEventListener('click', function(){
	reset();
})

function init(){
	setUpModeBtns();
	setUpSquares();
	reset();
}

function setUpModeBtns(){
	for(i=0; i<modeBtns.length; i++){
	modeBtns[i].addEventListener('click', function(){
		modeBtns[0].classList.remove('selected');
		modeBtns[1].classList.remove('selected');
		this.classList.add('selected');
		this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
		reset();
		})
	}
}

function setUpSquares(){
	for(i=0; i<squares.length; i++){
	// Add colors to squares
	// Add click listeners to squares
	squares[i].addEventListener('click', function(){
		// Get color of clicked square
		var clickedColor = this.style.backgroundColor;
		// compare color to pickedColor
		if(clickedColor == pickedColor){
			messageDisplay.textContent = 'Correct';
			h1.style.backgroundColor = clickedColor;
			changeColors(clickedColor);
			resetButton.textContent = "Play Again";
		}else{
			this.style.backgroundColor = '#232323';
			messageDisplay.textContent = 'Try Again';
		}
	});
	}
}


function changeColors(colors){
	for(i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	console.log(colors[random])
	return colors[random];
}

function generateRandomColors(num){
	// Make an array
	var arr =[];
	// Add num random colors to array
	for(i=0; i<num; i++){
		arr.push(randomColor())
	}
	// retrun that array
	return arr
}

function randomColor(){
	// pick a red
	var r = Math.floor(Math.random()*256);
	// pick a green
	var g = Math.floor(Math.random()*256);
	// pick a blue
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

