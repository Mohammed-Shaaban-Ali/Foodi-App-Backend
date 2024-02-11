const mongoose = require("mongoose");
const { Schema } = mongoose;

// schema model
const userSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      trim: true,
      minlength: 3,
    },
    photoURL: {
      type: String,
      default:
        "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg",
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

// create a model instance
const User = mongoose.model("User", userSchema);

module.exports = User;
