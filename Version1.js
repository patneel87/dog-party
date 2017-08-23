var inputfield = document.querySelector(".input-field")	
var guessButton = document.querySelector(".guessButton")
var numberArea = document.querySelector(".numberArea")
var clearButton = document.querySelector(".clearButton")
var resetButton = document.querySelector(".resetButton")
var min = 1
var max = 100
// var randomNumber = getRandom()
console.log(randomNumber)
var lastGuessText = document.querySelector(".lastguess")
// console.log(inputfield.value.length)


guessButton.addEventListener('click' , numberGuess)
guessButton.addEventListener('click' , getRandom)
clearButton.addEventListener('click' , clearField)
resetButton.addEventListener('click' , resetInput)
inputfield.addEventListener('keyup' , disableClear)
inputfield.addEventListener('keyup' , enableReset)
inputfield.addEventListener('keyup' , enableGuess)

function disableClear() {
	if (inputfield.value === "") {
		clearButton.disabled = true;
} else {clearButton.disabled = false;

}
}

function enableReset() {
	if (inputfield.value ===""){
		resetButton.disabled = true;
	}else {
		resetButton.disabled = false;


	}

}

function enableGuess() {
	if (inputfield.value === ""){
		guessButton.disabled = true;
	} else {
		guessButton.disabled = false;
	}
}
function numberGuess() {
	var guessInput = parseInt(inputfield.value)
	number.innerText = guessInput
	console.log(lastGuessText.innerText)

	if ( guessInput === randomNumber){
		lastGuessText.innerText = "boom";
	} else if (guessInput > randomNumber){
		lastGuessText.innerText = "to high";
	} else {
		lastGuessText.innerText = "to low";
	}

}

function getRandom() {
	return Math.floor(Math.random() * (max - min + 1) );
}

function clearField() {
	inputfield.value = "";
	clearButton.disabled = true;
}

function resetInput() {
	inputfield.value = "";
	resetButton.disabled = true;
}