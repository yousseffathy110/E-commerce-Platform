// main.js
const prompt = require('prompt-sync')({ sigint: true });
const { listProducts, viewProductDetails } = require('./controllers/productController');
const { addToCart, removeFromCart, displayCart } = require('./controllers/cartController');
const { checkout } = require('./controllers/orderController');
const User = require('./classes/User');
const { adminLogin, logout } = require('./controllers/userController'); 
const { addProduct, updateProduct, deleteProduct } = require('./controllers/adminController');
const chalk = require('chalk');

console.log("Welcome to the eCommerce platform!\n");

let action;
let isAdminLoggedIn = false; // true for development purposes


do {
    console.log("\n1. Admin Login");
    console.log("2. Add Product");
    console.log("3. Update Product");  // Update Product now at position 3
    console.log("4. Delete Product");  // Delete Product now at position 4
    console.log("5. List Products");
    console.log("6. View Product Details");
    console.log("7. Add Product to Cart");
    console.log("8. Remove Product from Cart");
    console.log("9. View Cart");
    console.log("10. Checkout");
    console.log("11. Logout");
    console.log("12. Exit");
  
    action = prompt("Choose an option: ");
  
    switch (action) {
        case '1':
            if (!isAdminLoggedIn) {
                isAdminLoggedIn = adminLogin(); 
            } else {
                console.log("Admin already logged in.");
            }
            break;
  
        case '2':
            if (isAdminLoggedIn) {
                addProduct();
            } else {
                console.log(chalk.red("You need to be logged in as admin to add a product."));
            }
            break;
  
        case '3':  // Update Product
            if (isAdminLoggedIn) {
                updateProduct();
            } else {
                console.log(chalk.red("You need to be logged in as admin to update a product."));
            }
            break;
  
        case '4':  // Delete Product
            if (isAdminLoggedIn) {
                deleteProduct();
            } else {
                console.log(chalk.red("You need to be logged in as admin to delete a product."));
            }
            break;
  
        case '5':  // List Products
            console.log("\nListing all products:");
            listProducts();
            break;
  
        case '6':  // View Product Details
            const productId = parseInt(prompt("Enter Product ID: "), 10);
            console.log(`\nViewing details of product with ID ${productId}:`);
            viewProductDetails(productId);
            break;
  
        case '7':  // Add Product to Cart
            const addId = parseInt(prompt("Enter Product ID to add to cart: "), 10);
            console.log(`\nAdding product with ID ${addId} to cart:`);
            addToCart(addId);
            break;
  
        case '8':  // Remove Product from Cart
            const removeId = parseInt(prompt("Enter Product ID to remove from cart: "), 10);
            console.log(`\nRemoving product with ID ${removeId} from cart:`);
            removeFromCart(removeId);
            break;
  
        case '9':  // View Cart
            console.log("\nDisplaying cart:");
            displayCart();
            break;
  
        case '10':  // Checkout
            const name = prompt("Enter your name: ");
            const email = prompt("Enter your email: ");
            const user = new User(Date.now(), name, email);
            console.log("\nProceeding to checkout:");
            checkout(user);
            break;
  
        case '11':  // Logout
            if (isAdminLoggedIn) {
                logout(); // Call logout function
                isAdminLoggedIn = false; // Update admin login status
            } else {
                console.log("No admin is currently logged in.");
            }
            break;
  
        case '12':  // Exit
            console.log("\nExiting the platform. Thank you!");
            break;
  
        default:
            console.log("\nInvalid option. Please try again.");
            break;
    }
  
  } while (action !== '12');
  