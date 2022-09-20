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
};

module.exports = userController;
