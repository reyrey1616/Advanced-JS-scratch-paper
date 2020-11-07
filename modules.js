// REVEALING MODULE PATTERN that receives param
const num3 = 3;

const script = (function (num3) {
	const num1 = 1;
	const num2 = 2;

	function add(num1, num2) {
		return num1 + num2;
	}
	num3 = 5;
	console.log(num3);
	return {
		add,
	};
})(num3);

console.log(script.add(1, 3));
