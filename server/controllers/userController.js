const User = require("../models/User");

//get all users
const getUsers = async (req, res) => {
  const users = await User.find().sort({ createdAt: -1 });
  res.status(200).json(users);
};

const signupuser = async (req, res) => {
  try {
    const user = req.body;
    const newUser = new User(user);
    await newUser.save();
    return res.status(200).json({ msg: "signup & successful" });
  } catch (err) {
    return res.status(500).json({ msg: "error while signup" });
  }
};

module.exports = { getUsers, signupuser };
