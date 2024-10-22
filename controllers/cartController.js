// Manages cart actions (add/remove, view cart)
const Cart = require('../classes/Cart');
const products = require('../data/products');
let cart = new Cart();

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  
  if (product) {
      cart.addToCart(product);

      console.log(chalk.greenBright(`${product.name} added to your cart`));
  } else {
      console.log(chalk.red(`Error: Product with ID ${productId} does not exist.`));
  }
}

function removeFromCart(productId) {  if (productInCart) {
  cart.removeFromCart(productId);
  console.log(`Product with ID ${productId} removed from your cart`);
} else {
  console.log(chalk.red(`Error: Product with ID ${productId} is not in the cart.`));
}
  // Check if the product ID exists in the cart items array
  const productInCart = cart.items.find(item => item.id === productId);
  
  if (productInCart) {
      cart.removeFromCart(productId);
      console.log(`Product with ID ${productId} removed from your cart`);
  } else {
      console.log(chalk.red(`Error: Product with ID ${productId} is not in the cart.`));
  }
}

function displayCart() {
    cart.items.forEach(item => {
        console.log(`${item.name} - $${item.price}`);
    });
    console.log(`Total: $${cart.calculateTotal()}`);
}

module.exports = {
    addToCart,
    removeFromCart,
    displayCart
};
