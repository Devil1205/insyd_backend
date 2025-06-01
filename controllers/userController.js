const User = require("../models/User");

const createUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
};

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

module.exports = {
  createUser,
  getAllUsers,
};
