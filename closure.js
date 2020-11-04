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

// Memory efficient - Stored the array to the closure box.
// Created closure inside the heavy duty function to avoid creating a new array on every invocation.
function heavyDuty() {
	const bigArray = new Array(5000).fill('Yobbad');
	console.log('Array created');

	return function (index) {
		console.log(bigArray[index]);
	};
}
const getHeavyDuty = heavyDuty();

getHeavyDuty(1047);
getHeavyDuty(594);

// Closure 2 - with encapsulation
function initializeView() {
	let called = 0;

	function initialize() {
		return function () {
			if (called > 0) {
				return;
			} else {
				let view = '😋';
				called++;
				console.log('view has been set');
			}
		};
	}
	const startOnce = initialize();
	const start = () => startOnce();

	return {
		start,
	};
}

const init = initializeView();

init.start();
init.start();
