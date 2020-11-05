// FACTORY FUNCTIONS
const elfFunction = {
	attack() {
		console.log(`attack with ${this.weapon}`);
	},
};

function createElf(name, weapon) {
	const newElf = Object.create(elfFunction);
	newElf.name = name;
	newElf.weapon = weapon;

	return newElf;
}

const yobbad = createElf('Yobbad', 'Code');
yobbad.attack();

// Constructor Functions
function Elf(name, weapon) {
	this.name = name;
	this.weapon = weapon;
}

Elf.prototype.attack = function () {
	console.log(`attack with ${this.weapon}`);
};

Elf.prototype.build = function () {
	const self = this;

	function building() {
		console.log(`${self.name} builds a house`);
	}

	return building();
};

const ivory = new Elf('Ivory', 'Hands');
ivory.attack();
ivory.build();

// Creating warrior class - ES6 Class
// Class is objects inheriting another objects when doing inheritance
class Character {
	// hashtag sign means the variable is private
	// #age = 54;
	constructor(name, weapon) {
		this.name = name;
		this.weapon = weapon;
	}
	// Adding underscore before the function name mean it is private function
	_attack() {
		return `attack with ${this.age}`;
	}
}

// Extending class means setting the proto of Warrior class into Character class
class Warrior extends Character {
	constructor(name, weapon, type) {
		super(name, weapon);
		this.type = type;
	}
}

class Ogre extends Character {
	constructor(name, weapon, color) {
		super(name, weapon);
		this.color = color;
	}
	makeFort() {
		return `strongest fort in the world`;
	}
}

// new instance/ instanciating class / Object
const skyler = new Warrior('Skyler', 'Head', 'Child');
const stephen = new Ogre('Stephen', 'Nails', 'Blue');

console.log(skyler.attack());
console.log(stephen.makeFort());
