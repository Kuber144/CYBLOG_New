const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: String,
  hashes: [String],
  content: String,
  user_id: String,
  upvotes: {
    type: Number,
    default: 0,
  },
  comments: [
    {
      user_id: String,
      content: String,
    },
  ],
  attachments: {
    type: [
      {
        title: String,
        drive_link: String,
      },
    ],
  },
  collaborators: [String],
});

module.exports = mongoose.model("Blogs", blogSchema);
