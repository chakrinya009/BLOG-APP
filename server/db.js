const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  await mongoose.connect(process.env.MONGODBKEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    console.log("database connected");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectDB;
