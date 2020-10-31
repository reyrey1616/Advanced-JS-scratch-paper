// Higher order function
const multiply = (num1) => (num2) => console.log(num1 * num2);
multiply(4)(6);

// Closures
const greet = (greeting) => (fname) => (lname) =>
	console.log(`${greeting} ${fname} ${lname}`);

const greetHello = greet('Hello');
greetHello('Rey')('Guidoriagao');

function callMeMaybe() {
	setTimeout(function () {
		console.log(callMe);
	}, 5000);
	let callMe = 'Hi there';
}

callMeMaybe();
