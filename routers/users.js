const express = require("express");
const userRouter = new express.Router();
const userController = require("../controllers/user.js");
userRouter.get("/users", userController.getAllUsers);
userRouter.get("/user", userController.getSingleUser);
userRouter.get("/sorteduser", userController.getAllUsersSorted);
userRouter.put("/user", userController.updateUser);
module.exports = userRouter;
