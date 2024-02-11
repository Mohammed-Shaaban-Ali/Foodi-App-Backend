const mongoose = require("mongoose");

module.exports = async () => {
  console.log(typeof process.env.MONGO_URL);
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connect To MongoDB ^_^");
  } catch (error) {
    console.log("Connection Failed To MongoDB", error);
  }
};
