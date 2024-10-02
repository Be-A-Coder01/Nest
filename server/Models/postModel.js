const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: "String",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const postModel = mongoose.model("posts", postSchema);

module.exports = postModel;
