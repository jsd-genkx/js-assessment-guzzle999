"use strict";
// JS Assessment: Find Your Hat //
import promptSync from "prompt-sync";
import clear from "clear-screen";

const prompt = promptSync({ sigint: true });


const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
	constructor(field = [[]]) {
		this.field = field;
		this.actorPosition = { x: 0, y: 0 };
		this.gameOver = false;
	}


	print() {
		console.log(this.field.map(row => row.join(" ")).join("\n"));
	    }

	//field
	static createField(row,col,holeCount=3) {
		const field = Array.from({length: row}, ()=>Array.from({length: col}, ()=>"░"));

	//holes
	let i = 0;
	while (i < holeCount) {
		const holesposX = Math.floor(Math.random()*col);
		const holesposY = Math.floor(Math.random()*row);
	 	if (field[holesposY][holesposX] === "░" && !(holesposX === 0 && holesposY === 0)) {
			field[holesposY][holesposX] = "O";
		i++;
	 }
	}

	//hat
	let hatPosition = false;
	while (!hatPosition) {
		const hatposX = Math.floor(Math.random()*col);
		const hatposY = Math.floor(Math.random()*row);
		if (field[hatposY][hatposX] === "░" && !(hatposX=== 0 && hatposY === 0)) {
			field[hatposY][hatposX] = "^";
			hatPosition = true;
		}
	}
	//actor
	field[0][0] = "*"
	return field;
	}

	//Move Fucntion
	move(direction) {
	let {x,y} = this.actorPosition;
		switch (direction) {
			case'8' : y -= 1;
			break;
			case'5' : y += 1;
			break;
			case'4' : x -= 1;
			break;
			case'6' : x += 1;
			break;
			default:
				console.log("Please input number to move, use '4' to moveLeft, '6' to moveRight, '8' to moveUp, and '5' to moveDown");
				return;
		}

		if ( y < 0 || y>= this.field.length || x < 0 || x >= this.field[0].length) {
			console.log("You walked off the field. Game Over!");
			this.gameOver = true;
			return;
		}

		const nextStep = this.field[y][x];

		if (nextStep === "O") {
			console.log("You fell in to a hole. Game Over!");
			this.gameOver = true;
		} else if (nextStep === "^") {
			console.log("Yeah! You found your hat! You win!");
			this.gameOver = true;
		} else {
			this.field[this.actorPosition.y][this.actorPosition.x] = pathCharacter;
			this.actorPosition = {x, y};
			this.field[this.actorPosition.y][this.actorPosition.x] = pathCharacter;
		}
	}

}

function startGame() {
	const fieldData = Field.createField(4,4);
	const newField = new Field(fieldData);

	while (!newField.gameOver) {
		console.clear();
		newField.print();
		const direction = prompt("Which way?");
		newField.move(direction)
		}
	}

startGame();
