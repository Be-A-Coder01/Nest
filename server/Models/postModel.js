const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  content: {
    type: "String",
  },
  postImage: {
    type: "Mixed",
  },
  userId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

const postModel = mongoose.model("posts", postSchema);

module.exports = postModel;
