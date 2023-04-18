const display = document.querySelector('#display');

let string = [];
let displayString = [];
let operatorCounter = 1;

function numberInput(input) {
	string.push(input);
	displayString.push(input);
	display.textContent = displayString.join('');
	console.log(string);
	return string;
}

function operatorInput(input) {
	if (operatorCounter > 1) {
		operate(string);
	}
	string.push(input);
	console.log(string);
	displayString = [];
	operatorCounter++;
	return string;
	console.log(string);
}

function operate(input) {
	regex = /([+-/*]+)/g;
	operateString = input.join('').split(regex);
	if (operateString[1] === '+') {
		result = Number(operateString[0]) + Number(operateString[2]);
	} else if (operateString[1] === '-') {
		result = Number(operateString[0]) - Number(operateString[2]);
	} else if (operateString[1] === '*') {
		result = Number(operateString[0]) * Number(operateString[2]);
	} else {
		if (operateString[2] === '0') {
			result = 'TAKE A HIKE!';
		} else {
			result = Number(operateString[0]) / Number(operateString[2]);
		}
	}
	display.textContent = result;
	displayString = [];
	string = [];
	string.push(result);
}

function equalInput() {
	operate(string);
	operatorCounter = 1;
}

function clearInput() {
	string = [];
	displayString = [];
	operatorCounter = 1;
	display.textContent = 'Cleared!';
}

const buttons = document.querySelectorAll('.numbutton');
buttons.forEach((button) => {
	button.addEventListener('click', () => numberInput(button.id));
});

const opButtons = document.querySelectorAll('.opbutton');
opButtons.forEach((button) => {
	button.addEventListener('click', () => operatorInput(button.id));
});

const equalButton = document.querySelector('.equalButton');
equalButton.addEventListener('click', () => equalInput(string));

const clearButton = document.querySelector('.clearButton');
clearButton.addEventListener('click', () => clearInput());
