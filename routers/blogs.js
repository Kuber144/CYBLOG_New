const express = require("express");
const blogRouter = new express.Router();
const blogController = require("../controllers/blogs.js");

blogRouter.get("/", blogController.getAllblogs);

blogRouter.get("/userBlog", blogController.getUserBlog);

module.exports = blogRouter;
