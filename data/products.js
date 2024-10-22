// data/products.js
const Product = require('../classes/Product');

const products = [
    new Product(1, 'Laptop', 'High performance laptop', 1000, 10),
    new Product(2, 'Phone', 'Latest model smartphone', 600, 20),
];

module.exports = products;
