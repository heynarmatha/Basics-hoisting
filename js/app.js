
console.log(a);    //undefined
var a;

console.log(a);    //undefined
var a=12;
console.log(a);   

//** if we declare the const means we want to assign to it 

console.log(b);   //syntaxerror
const b;


console.log(x);   //reference error
let b;

const a=10;
a=90;
console.log(a); //typeerror



//***************function hoisting

hello(); // "hello"

function hello() {
	console.log('hello');
}


//***storing the function in variable */


first(); // Uncaught TypeError: first is not a function
var first = function () {
   console.log("gfh");
 }

second(); // Uncaught ReferenceError: Cannot access 'second' before initialization
let second = function () { }

third(); // Uncaught ReferenceError: Cannot access 'third' before initialization
const third = function () { }

//1..example for Hoisting

resetScore();
drawGameBoard();
populateGameBoard();
startGame();

function resetScore() {
	console.log("Resetting score");
}

function drawGameBoard() {
	console.log("Drawing board");
}

function populateGameBoard() {
	console.log("Populating board");
}

function startGame() {
	console.log("Starting game");
}
 

//2..example for Hoisting

var x=1;
a();
b();
console.log(x); 
function a(){
    var x=10;
    console.log(x); 
}

function b(){
    var y=1000;
    console.log(y);
}
 //output

 //10
 //1000
 //1