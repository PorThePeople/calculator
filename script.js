const display = document.querySelector('#display');

function screenDisplay(input) {
	display.textContent = `${input}`;
	console.log(input);
}

const buttons = document.querySelectorAll('.numbutton');
buttons.forEach((button) => {
	button.addEventListener('click', () => screenDisplay(button.id));
});
