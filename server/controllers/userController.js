const User = require("../models/User");

//get all users
const getUsers = async (req, res) => {
  const users = await User.find().sort({ createdAt: -1 });
  res.status(200).json(users);
};

module.exports ={getUsers}
