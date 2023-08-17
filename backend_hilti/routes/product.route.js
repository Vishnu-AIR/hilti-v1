const ProductRoutes = require('express').Router();
const ProductController = require('../controller/product.controller');

ProductRoutes.get("/", ProductController.fetchAllProducts);
ProductRoutes.post("/", ProductController.createProduct);

module.exports = ProductRoutes;