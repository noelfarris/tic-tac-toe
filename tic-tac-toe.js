var prompt = require('prompt-sync').prompt;
var gameOver = false
var turn = 5;
var x = null;
var y = null;
var player1 = null;
var player2 = null;


var board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];


var boardReset = function() {
	board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];
}

var draw = function(board){
   console.log("        1      2      3" + "\n" +
    "       ~~~~~~~~~~~~~~~~~" + "\n"
    + "1       |" + board[0][0] + "   |" + board[0][1] + "   |" + board[0][2] + "   |" + "\n" +
    "       ~~~~~~~~~~~~~~~~~" + "\n"
    + "2       |" + board[1][0] + "   |" + board[1][1] + "   |" + board[1][2] + "   |" + "\n" +
    "       ~~~~~~~~~~~~~~~~~" + "\n"
    + "3       |" + board[2][0] + "   |" + board[2][1] + "   |" + board[2][2] + "   |" + "\n" +
    "       ~~~~~~~~~~~~~~~~~" + "\n");
}


var playerTwo = function(){

console.log(player2 + " make your move.");

var p2Response = prompt().split(" ", 2);
x = parseInt(p2Response[0]);
y = parseInt(p2Response[1]);

while(x > 3 || x < 1 || y > 3 || y < 1) {
    console.log("error Invalid input: you must enter the x and y coordinates separated by spaces");
    p2Response = prompt().split(" ", 2);
    x = parseInt(p2Response[0]);
    y = parseInt(p2Response[1]);
}
while(board[x-1][y-1]===('X' || 'O')) {
    console.log("Space already taken. Choose again.");
    p2Response = prompt().split(" ", 2);
    x = parseInt(p2Response[0]);
    y = parseInt(p2Response[1]);
}
    board[x-1][y-1] = 'O'
    draw(board);

var rowOne = [board[0][0], board[0][1], board[0][2]];
var rowTwo = [board[1][0], board[1][1], board[1][2]];
var rowThree = [board[2][0], board[2][1], board[2][2]];
var diagOne = [board[0][0], board[1][1], board[2][2]];
var diagTwo = [board[0][2], board[1][1], board[2][0]];
var colOne = [board[0][0], board[1][0], board[2][0]];
var colTwo = [board[0][1], board[1][1], board[2][1]];
var colThree = [board[0][2], board[1][2], board[2][2]];

if (rowOne.toString() === 'O,O,O') {
        console.log(player2 + " wins!");
        playAgain();
}
else if (rowTwo.toString() === 'O,O,O') {
    console.log(player2 + " wins!");
    playAgain();
}
else if (rowThree.toString() === 'O,O,O') {
    console.log(player2 + " wins!")
    playAgain();
}
else if (diagOne.toString() === 'O,O,O') {
    console.log(player2 + " wins!");
    playAgain();
}
else if (diagTwo.toString() === 'O,O,O') {
    console.log(player2 + " wins!");
    playAgain();
}
else if (colOne.toString() === 'O,O,O') {
    console.log(player2 + " wins!");
    playAgain();
}
else if (colTwo.toString() === 'O,O,O') {
    console.log(player2 + " wins!");
    playAgain();
}
else if (colThree.toString() === 'O,O,O') {
    console.log(player2 + " wins!");
    playAgain();
};    

playerOne();
}


var playerOne = function(){

console.log(player1 + " make your move.");

var p1Response = prompt().split(" ", 2);
var x = parseInt(p1Response[0]);
var y = parseInt(p1Response[1]);

while(x > 3 || x < 1 || y > 3 || y < 1) {
    console.log("error Invalid input: you must enter the x and y coordinates separated by spaces");
    p1Response = prompt().split(" ", 2);
    x = parseInt(p1Response[0]);
    y = parseInt(p1Response[1]);
}
while(board[x-1][y-1]===('X' || 'O')) {
    console.log("Space already taken. Choose again.");
    p1Response = prompt().split(" ", 2);
    x = parseInt(p1Response[0]);
    y = parseInt(p1Response[1]);
}
    board[x-1][y-1] = 'X'
    draw(board);

var rowOne = [board[0][0], board[0][1], board[0][2]];
var rowTwo = [board[1][0], board[1][1], board[1][2]];
var rowThree = [board[2][0], board[2][1], board[2][2]];
var diagOne = [board[0][0], board[1][1], board[2][2]];
var diagTwo = [board[0][2], board[1][1], board[2][0]];
var colOne = [board[0][0], board[1][0], board[2][0]];
var colTwo = [board[0][1], board[1][1], board[2][1]];
var colThree = [board[0][2], board[1][2], board[2][2]];


if (rowOne.toString() === 'X,X,X') {
        console.log(player1 + " wins!");
        playAgain();
}
else if (rowTwo.toString() === 'X,X,X') {
    console.log(player1 + " wins!");
    playAgain();
}
else if (rowThree.toString() === 'X,X,X') {
    console.log(player1 + " wins!");
    playAgain();
}
else if (diagOne.toString() === 'X,X,X') {
    console.log(player1 + " wins!");
    playAgain();
}
else if (diagTwo.toString() === 'X,X,X') {
    console.log(player1 + " wins!");
    playAgain();
}
else if (colOne.toString() === 'X,X,X') {
    console.log(player1 + " wins!");
    playAgain();
}
else if (colTwo.toString() === 'X,X,X') {
    console.log(player1 + " wins!");
    playAgain();
}
else if (colThree.toString() === 'X,X,X') {
    console.log(player1 + " wins!");
    playAgain();
};
 turn = turn - 1;
    if (turn === 0) {
        console.log('It\'s a tie.');
        playAgain();
    };    
playerTwo();

}

var gameStart = function() {
	boardReset();
	console.log("Let's play a game. Player 1, please enter your name:");
	player1 = prompt();
	console.log("Welcome " + player1 + ". Player 2, please enter your name:");
	player2 = prompt();
	console.log("Welcome " + player2 + ". Let's see the game board.");
	draw(board);
	console.log(player1 + " will be X and will go first.")
	console.log("Please enter your answer in the format of coordinates: ex. 1 1 will be in the top left corner.");
	playerOne();
	}

var playAgain = function() {
	console.log("would you like to play again? Yes or no?");
	var answer = prompt().toLowerCase();
	if(answer === "yes") {
		console.log("Cool.");
		gameStart();
	} else {
		console.log("See ya.");
		gameOver = true;
	}
}
gameStart();