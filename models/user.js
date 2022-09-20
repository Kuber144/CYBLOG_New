const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  user_id: String,
  name: String,
  email: String,
  show_email: {
    type: Boolean,
    default: false,
  },

  show_gender: {
    type: Boolean,
    default: false,
  },
  blogs: [
    {
      title: String,
      blog_image: String,
      content: String,
    },
  ],
  ieee_id: String,
  password: String,
  img_url: String,
  professional_title: String,
  years_of_experience: Number,
  dob_day: Number,
  dob_month: Number,
  dob_year: Number,
  gender: String,
  about: String,
  Areas_of_expertise: [String],

  github_username: {
    type: String,
    default: "null",
  },
  profile_completed: {
    type: Boolean,
    //TODO -> CHANGE
    default: true,
  },
});

module.exports = mongoose.model("User", userSchema);
