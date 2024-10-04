const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
  },
  userName: {
    type: "String",
    required: true,
  },
  email: {
    type: "String",
    required: true,
  },
  password: {
    type: "String",
    required: true,
  },
  number: {
    type: "Number",
    required: true,
  },
  city: {
    type: "String",
  },
  country: {
    type: "String",
  },
  profession: {
    type: "String",
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "posts",
    },
  ],

  profilePic: {
    type: "String",
    default:
      "https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg",
  },
  followers: {
    type: "Number",
  },
  following: {
    type: "Number",
  },
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
