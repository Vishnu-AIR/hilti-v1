const router = require('express').Router();
const UserController = require("../controller/user.controller")

router.post('/registartion',UserController.register)

router.post("/login", UserController.login);

router.post("/:id", UserController.updateUser);

router.get("/:id", UserController.getUser);


module.exports = router;
