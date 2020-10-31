// Higher order function

const multiplyBy = function (num1) {
	return function (num2) {
		console.log(num1 * num2);
	};
};

const multiplyByFive = multiplyBy(5);
const multiplyByThree = multiplyBy(3);

multiplyByFive(10);
multiplyByThree(10);
