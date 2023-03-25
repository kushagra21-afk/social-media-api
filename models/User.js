const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 5,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    desc: {
      type: String,
      max: 50,
    },
    followers: {
      type: Array,
      default: []
    },
    following: {
      type: Array,
      default: []
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
