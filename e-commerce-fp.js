// E-COMMERCE SHOPPING WITH FUNCTIONAL JAVASCRIPT
const user = {
	name: 'Kim',
	active: true,
	cart: [],
	purchases: [],
};

let history = [];

const compose = (f, g) => (...args) => f(g(...args));

function purchaseItem(...fns) {
	return fns.reduce(compose);
}
function addItemToCart(user, item) {
	history.push(user);

	const updatedCart = user.cart.concat(item);
	return Object.assign({}, user, { cart: updatedCart });
}

function applyTaxToItems(user) {
	history.push(user);

	const { cart } = user;
	const taxRate = 1.3;
	const updatedCart = cart.map((item) => {
		return {
			name: item.name,
			price: item.price * taxRate,
		};
	});
	return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user) {
	history.push(user);

	return Object.assign({}, user, { purchases: user.cart });
}

function emptyCart(user) {
	history.push(user);

	return Object.assign({}, user, { cart: [] });
}

console.log(
	purchaseItem(
		emptyCart,
		buyItem,
		applyTaxToItems,
		addItemToCart
	)(user, { name: 'Laptop', price: 200 })
);

console.log(history);
