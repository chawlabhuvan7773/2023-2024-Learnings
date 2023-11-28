const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    userName: {
      type: String,
      required: [true, "please add the user name"],
    },
    email: {
      type: String,
      required: [true, "please add the user email address"],
      unique: [true, "Email address is already exist"],
    },
    password: {
      type: String,
      required: [true, "Please add the user password"],
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("user", userSchema);
