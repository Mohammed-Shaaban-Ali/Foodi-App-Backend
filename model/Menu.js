const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
    },
    recipe: String,
    image: String,
    category: String,
    price: Number,
  },
  { timestamps: true }
);

// comment model
const Menu = mongoose.model("Menu", MenuSchema);

module.exports = Menu;
