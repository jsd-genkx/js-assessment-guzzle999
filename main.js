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
		this.positionRow = 0;
		this.positionCol = 0;
		this.gameOver = false;
	}

	static createField(holes,row,col) {

	const field = [];
	const len = row*col;
	const dimension =new Array(len).fill("░");
	console.log(dimension)

	//holes
	for (let i=0; i < holes; i++); {
		const holePosition = Math.floor(Math.random()*len);
		dimension[holePosition] = "0"
	}

	//hat
	const hatPosition = Math.floor(Math.random()*len);
	dimension[hatPosition] = "^"

	//actor
	for (let i=0, i < row; i++) {
		const actorPosition =  []
		for (let j=0; j<col; j++); {
			actorPosition.push(dimension.pop());
		}
		field.push(fieldPosition);
	}
	return field;
	}


	// Print field //
	print() {
		clear();

		// Replace with your own code //
		console.log(this.field); // Please REMOVE this line before you start your code!
	}

	// Your Code //
}

// Game Mode ON
// Remark: Code example below should be deleted and use your own code.
const newGame = new Field([
	["░", "░", "O"],
	["░", "O", "░"],
	["░", "^", "░"],
]);
newGame.print();
