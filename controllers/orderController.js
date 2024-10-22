// Manages order actions (checkout, order status)
const Cart = require('../classes/Cart');
const Order = require('../classes/Order');

// Import your existing cart instance
const cart = new Cart(); // or however you are managing the cart instance

function checkout(userDetails) {
    const order = new Order(userDetails, cart.items, cart.calculateTotal());
    console.log("Order details:", order);
}

module.exports = { checkout };

