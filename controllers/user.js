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
      const users = await User.find(query).sort({ github_verified: -1 });

      res.status(200).send(users);
    } catch (e) {
      res.status(404).send(e.message);
      console.log(e.message);
    }
  },
  
  
};

module.exports = userController;
