const Blog = require("../models/blog.js");
const User = require("../models/user.js");

const blogController = {
  getAllblogs: async (req, res) => {
    try {
      const blogs = await Blog.find();
      res.status(200).send(blogs);
    } catch (e) {
      res.status(404).send(e.message);
      console.log(e.message);
    }
  },
  getUserBlog: async (req, res) => {
    try {
      const { user_id } = req.query;
      console.log(user_id)
      const query = {
        $and: [
          {
            user_id: {
              $eq: user_id,
            },
          },
        ],
      };
      const userBlogs = await Blog.find(query);
      console.log("hereee");
      console.log(userBlogs);
      res.status(200).send(userBlogs);
    } catch (e) {
      res.status(404).send(e.message);
      console.log(e.message);
    }
  },
  putBlog: async (req, res) => {
    try {
      const { user_id } = req.query;
      // console.log("herw");
      // console.log(req.body);
      const user = await User.findOne({ user_id });

      const blog = req.body.blog;
      const nblog = { ...blog, name: user.name };
      const newBlog = new Blog(nblog);
      await newBlog.save();
      const curblog = user.blogs;
      curblog.push(newBlog._id);
      const updateUser = {
        $set: {
          blogs: curblog,
        },
      };
      await User.updateOne({ user_id }, updateUser);
      res.status(201).send(newBlog);
    } catch (e) {
      console.log(e);
      res.status(403).send(e.message);
    }
  },
  getAllblogsSorted: async (req, res) => {
    try {
      const blogs = await Blog.find().sort({ upvotes: -1 }).limit(10);
      // console.log(blogs)
      res.status(200).send(blogs);
    } catch (e) {
      console.log(e.message);
      res.status(404).send(e.message);
    }
  },
};
module.exports = blogController;
