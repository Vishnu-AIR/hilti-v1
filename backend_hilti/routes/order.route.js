const OrderRoutes = require('express').Router();
const OrderController = require('../controller/order.controller');

OrderRoutes.post("/create", OrderController.createOrder);
OrderRoutes.get("/:id", OrderController.getAllOrder);
OrderRoutes.get("/", OrderController.getAllOrder);
OrderRoutes.post("/adminonly/:id", OrderController.updateOrder);


module.exports = OrderRoutes;