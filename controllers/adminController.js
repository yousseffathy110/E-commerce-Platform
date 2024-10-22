const products = require('../data/products');
const prompt = require('prompt-sync')({ sigint: true });
const chalk = require('chalk');

function addProduct() {
  console.log("\n--- Add New Product ---");

  let id;
  let existingProduct;

  do {
    id = parseInt(prompt("Enter Product ID: "), 10);
    existingProduct = products.find(product => product.id === id);

    if (existingProduct) {
      console.log(chalk.red(`Error: Product with ID ${id} already exists. Please enter a different ID.`));
    }
  } while (existingProduct);

  // Proceed to ask for other product details
  const name = prompt("Enter Product Name: ");
  const description = prompt("Enter Product Description: ");
  const price = parseFloat(prompt("Enter Product Price: "));
  const stock = parseInt(prompt("Enter Product Stock: "), 10);

  // Create a new product object
  const newProduct = {
    id,
    name,
    description,
    price,
    stock
  };

  // Add the new product to the products array
  products.push(newProduct);
  console.log(`Product "${name}" added successfully!`);
}

function updateProduct() {
  let id;
  let index;

  do {
    id = parseInt(prompt("Enter Product ID: "), 10);
    index = products.findIndex(p => p.id === id);

    if (index === -1) {
        console.log(chalk.red(`Error: Product with ID ${id} does not exist.`));
    }

  } while (index === -1);


  
  console.log(`Updating product with ID ${id}:`);
  
  const updatedName = prompt(`Enter new name (current: ${products[index].name}): `);
  const updatedDescription = prompt(`Enter new description (current: ${products[index].description}): `);
  const updatedPrice = parseFloat(prompt(`Enter new price (current: ${products[index].price}): `));
  const updatedStock = parseInt(prompt(`Enter new stock (current: ${products[index].stock}): `));

  products[index] = {
      id,
      name: updatedName || products[index].name,
      description: updatedDescription || products[index].description,
      price: isNaN(updatedPrice) ? products[index].price : updatedPrice,
      stock: isNaN(updatedStock) ? products[index].stock : updatedStock
  };

  console.log(chalk.greenBright(`Product with ID ${id} updated successfully!`));
}

function deleteProduct() {
  let id ;
  let index;

  do {
    id = parseInt(prompt("Enter Product ID to delete: "), 10);
    existingProduct = products.find(product => product.id !== id);

    index = products.findIndex(p => p.id === id);


    if (index === -1) {
        console.log(chalk.red(`Error: Product with ID ${id} does not exist.`));
    }

  } while (index === -1);


  const confirm = prompt(`Are you sure you want to delete the product with ID ${id}? (yes/no): `);
  if (confirm.toLowerCase() === 'yes' || 'y') {
      products.splice(index, 1);
      console.log(chalk.greenBright(`Product with ID ${id} deleted successfully!`));
  } else {
      console.log(`Deletion of product with ID ${id} canceled.`);
  }
}

module.exports = {
    addProduct,
    updateProduct,
    deleteProduct
};
