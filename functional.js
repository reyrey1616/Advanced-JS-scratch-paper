// E-COMMERCE SHOPPING WITH FUNCTIONAL JAVASCRIPT
const user = {
	name: 'Kim',
	active: true,
	cart: [],
	purchases: [],
};

const item = {
	name: 'White Shirt',
	price: 99,
};

const withTax = (price) => {
	return price + price * 0.03;
};

const addItemToCart = (item) => {
	item.price = withTax(item.price);
	user.cart.push(item);
};

const purchaseItem = () => {
	user.cart.map((item) => user.purchases.push(item));
	user.cart = [];
};

// addItemToCart(item);
// console.log(user);

// purchaseItem();

// console.log(user);

// PURE FUNCTION
// input --> output
// no side effects
// Function without mutating the original array
const array = [1, 2, 3];

function removeLastItem(arr) {
	let newArr = [].concat(arr);
	newArr.pop();
	return newArr;
}

function multiplyBy2(arr) {
	return arr.map((item) => item * 2);
}

console.log(removeLastItem(array));
console.log(multiplyBy2(array));

console.log(array);

// Higher order function
const hof = (fn) => () => fb(5);
hof(function a(x) {
	return x;
});

// Closure - In FP - Immutability - No side effect
const closure = function () {
	let count = 0;
	return function getCounter() {
		return count;
	};
};

const getCount = closure();

console.log(getCount());
console.log(getCount());
console.log(getCount());

// Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);

console.log(multiplyBy5(3));

// Partial Application
const addition = (a, b, c) => a + b + c;
const partialBy10 = addition.bind(null, 10);
console.log(partialBy10(8, 12));

// Caching - To avoid execution of the function when the data is the same
function addTo80(n) {
	console.log('Heavy computation');
	return n + 80;
}
addTo80(5);

// Memoization with closures
function memoizedAddTo80() {
	let cache = {};

	return function (n) {
		if (n in cache) {
			return cache[n];
		} else {
			console.log(cache);
			console.log('massive computation');
			return (cache[n] = n + 80);
		}
	};
}

const closureAddTo80 = memoizedAddTo80();

closureAddTo80(5);
closureAddTo80(5);
closureAddTo80(5);
closureAddTo80(5);

// COMPOSE
const compose = (f, g) => (data) => f(g(data));
const multiplyBy3 = (num) => num * 3;
const makeAbsolute = (num) => Math.abs(num);
const multiplyBy3AndAbsolute = compose(multiplyBy3, makeAbsolute);

console.log(multiplyBy3AndAbsolute(-50));

// PIPE
