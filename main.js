//First two text boxes
var blank1 = document.querySelector('#num_one');
var blank2 = document.querySelector('#num_two');

//Calculate button
var calb = document.querySelector('#calculateBtn');

//Answer Area
var answerarea = document.querySelector('#answer'); 

//Number holders
var number1;
var number2;

//The function that adds the numbers in text boxes
function calculate() {
	number1 = blank1.value;
	number2 = blank2.value;

	answerarea.innerHTML = Number(number1) + Number(number2);
}

//Adds click to the calculate button
calb.addEventListener('click', calculate);
