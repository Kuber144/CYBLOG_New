const User = require("../models/user.js");

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const { user_id } = req.query;
      const query = {
        $and: [
          {
            user_id: {
              $ne: user_id,
            },
          },
          {
            profile_completed: true,
          },
          {
            password: {
              $exists: true,
            },
          },
        ],
      };
      const users = await User.find(query);

      res.status(200).send(users);
    } catch (e) {
      res.status(404).send(e.message);
      console.log(e.message);
    }
  },
  getSingleUser: async (req, res) => {
    try {
      const { user_id, requested_id } = req.query;

      const curUser = await User.findOne({ user_id });
      const blocked_users = curUser.block;
      const query = {
        $and: [
          {
            user_id: requested_id,
          },
        ],
      };
      const user = await User.findOne(query);
      if (user) {
        return res.status(200).send(user);
      } else {
        res.status(403).send("blocked");
      }
    } catch (e) {
      res.status(400).send(e.message);
      console.log(e.message);
    }
  },
  updateUser: async (req, res) => {
    const formData = req.body.formData;
    try {
      const query = { user_id: formData.user_id };
      const updateDocument = {
        $set: {
          name: formData.name,
          dob_day: formData.dob_day,
          dob_month: formData.dob_month,
          dob_year: formData.dob_year,
          gender: formData.gender,
          img_url:
            formData.img_url.length() > 0
              ? formData.img_url
              : "https://media.istockphoto.com/id/587805156/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=gkvLDCgsHH-8HeQe7JsjhlOY6vRBJk_sKW9lyaLgmLo=",
          about: formData.about,
          professional_title: formData.professional_title,
          years_of_experience: formData.years_of_experience,
          show_email: formData.show_email,
          github_username: formData.github_username,
          show_gender: formData.show_gender,
          ieee_id: formData.ieee_id,
          profile_completed: true,
        },
      };

      await User.updateOne(query, updateDocument);
      const updatedUser = await User.findOne({ user_id: formData.user_id });

      res.status(201).send(updatedUser);
    } catch (e) {
      res.status(400).send(e.message);
      console.log(e.message);
    }
  },
  getAllUsersSorted: async (req, res) => {
    try {
      const query = {
        $and: [
          {
            profile_completed: true,
          },
          {
            password: {
              $exists: true,
            },
          },
        ],
      };
      const users = await User.find(query).sort({ likes: -1 }).limit(5);

      res.status(200).send(users);
    } catch (e) {
      res.status(404).send(e.message);
      console.log(e.message);
    }
  },
};

module.exports = userController;
