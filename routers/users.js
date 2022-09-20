const express = require("express");
const userRouter = new express.Router();
const userController = require("../controllers/user.js");
userRouter.get("/users", userController.getAllUsers);
module.exports = userRouter;
