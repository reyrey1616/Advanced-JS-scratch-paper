let dragon = {
	name: 'Sally',
	fire: true,
	fight() {
		console.log(5);
	},
	sing() {
		console.log(`I am ${this.name} the breather of fire`);
	},
};

let lizard = {
	name: 'Kiki',
	fight() {
		console.log(1);
	},
};

// Lizard Borrowing properties to the dragon by adding the dragon to its prototype chain
lizard.__proto__ = dragon;
lizard.sing();

for (prop in lizard) {
	if (lizard.hasOwnProperty(prop)) {
		console.log(prop);
	}
}

// Adding function to date prototype
Date.prototype.lastYear = function () {
	return this.getFullYear() - 1;
};

console.log(new Date().lastYear());

// Modifying Array map function
Array.prototype.map = function () {
	let arr = [];

	for (let i = 0; i < this.length; i++) {
		arr.push(`${this[i]} nice`);
	}

	return arr;
};

console.log([1, 2, 3].map());
