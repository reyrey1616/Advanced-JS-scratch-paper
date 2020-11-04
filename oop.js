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

const ivory = new Elf('Ivory', 'Hands');
ivory.attack();
