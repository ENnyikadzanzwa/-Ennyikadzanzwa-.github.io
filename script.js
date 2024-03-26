let cart = [];
let total = 0;

function addToCart(productId) {
if (productId === 1) {
cart.push({ id: 1, name: 'Product 1', price: 50 });
} else if (productId === 2) {
cart.push({ id: 2, name: 'Product 2', price: 40 });
}

total += cart[cart.length - 1].price;
document.getElementById('cart-total').textContent = total.toFixed(2);

updateCart();
}

function updateCart() {
const cartItems = document.getElementById('cart-items');
cartItems.innerHTML = '';
cart.forEach(item => {
const li = document.createElement('li');
li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
cartItems.appendChild(li);
});
}

function checkout() {
alert('Thank you for shopping with us! Your total is $' + total.toFixed(2));
cart = [];
total = 0;
document.getElementById('cart-total').textContent = total.toFixed(2);
updateCart();
}
