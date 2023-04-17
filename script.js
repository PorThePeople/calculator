const display = document.querySelector('#display');

let string = [];
let displayString = [];

function numberInput(input) {
	string.push(input);
	displayString.push(input);
	display.textContent = displayString.join('');
	console.log(string);
	return string;
}

function operatorInput(input) {
	string.push(input);
	console.log(string);
	displayString = [];
	return string;
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
		result = Number(operateString[0]) / Number(operateString[2]);
	}
	display.textContent = result;
	displayString = [];
	string = [];
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
equalButton.addEventListener('click', () => operate(string));
