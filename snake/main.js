'use strict';

let canvas = document.querySelector('.canvas');
let ctx = canvas.getContext('2d');

let box = 30;

let snakePosition = {
	x: 0 * box,
	y: 0 * box
};

let foodPosition = {
	x: Math.floor(Math.random() * 20) * box,
	y: Math.floor(Math.random() * 20) * box
};

document.addEventListener('keydown', direction);

let dir;

function direction(event) {
	if (event.keyCode === 37) dir = 'left';
	if (event.keyCode === 38) dir = 'up';
	if (event.keyCode === 39) dir = 'right';
	if (event.keyCode === 40) dir = 'down';
}

let score = 0;

function game() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = 'green';
	ctx.fillRect(snakePosition.x, snakePosition.y, box, box);

	ctx.fillStyle = 'red';
	ctx.fillRect(foodPosition.x, foodPosition.y, box, box);

	ctx.fillStyle = 'white';
	ctx.font = '100px serif';
	ctx.textAlign = 'center';
	ctx.fillText(score, canvas.width/2, 100);

	if (dir === 'left') snakePosition.x -= box;
	if (dir === 'up') snakePosition.y -= box;
	if (dir === 'right') snakePosition.x += box;
	if (dir === 'down') snakePosition.y += box;

	if (snakePosition.x === foodPosition.x &&
		snakePosition.y === foodPosition.y) {
		foodPosition = {
			x: Math.floor(Math.random() * 20) * box,
			y: Math.floor(Math.random() * 20) * box
		};

		score++;
	}

	if (snakePosition.x < 0 || snakePosition.x > 19 * box ||
		snakePosition.y < 0 || snakePosition.y > 19 * box) {	
		score = 0;
		snakePosition = {
			x: 10 * box,
			y: 10 * box
		};
	}

}

setInterval(game, 150);