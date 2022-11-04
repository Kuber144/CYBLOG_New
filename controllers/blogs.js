const Blog = require("../models/blog.js");

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
      res.status(200).send(userBlogs);
    } catch (e) {
      res.status(404).send(e.message);
      console.log(e.message);
    }
  },
};
module.exports = blogController;
