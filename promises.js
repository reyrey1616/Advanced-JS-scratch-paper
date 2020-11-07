const promise = new Promise((resolve, reject) => {
	if (true) {
		resolve('Stuff worked');
	} else {
		reject('Broke');
	}
});

const promise2 = new Promise((resolve, reject) => {
	resolve('Hi');
});

const promise3 = new Promise((resolve, reject) => {
	resolve('Hello');
});

// It will wait until all the promise are resolved even the other are resolved earlier
Promise.all([promise2, promise3]).then((res) => {
	console.log(res);
});

promise
	.then((result) => result + '!')
	.then((res) => console.log(res))
	.catch((err) => console.log(err));

// Dynamic number of params to add all values
function add(...params) {
	return params.reduce((a, item) => a + item, 0);
}

console.log(add(5, 6, 72, 2));

// const urls = [
// 	'https://jsonplaceholder.typicode.com/posts',
// 	'https://jsonplaceholder.typicode.com/users',
// 	'https://jsonplaceholder.typicode.com/albums',
// ];

// // For await of - ES9
// const getData = async () => {
// 	const arrayOfPromises = urls.map((url) => fetch(url));
// 	for await (let request of arrayOfPromises) {
// 		const data = await request.json();
// 		console.log(data);
// 	}
// };

// getData();

function a(req, res, next, err) {
	console.log('a');

	if (err) {
		// next();
	}
}

function b() {
	console.log('b');
}

function test(...params) {
	var req,
		res,
		next,
		err = {};
	params.map((fn) => fn(req, res, next, err));
}

test(a, b);
