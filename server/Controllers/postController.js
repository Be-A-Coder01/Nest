const user = require("../Models/userModel");
const post = require("../Models/postModel");

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const postadd = async (req, res) => {
  console.log("agaya");
  let { content } = await req.body;
  let userInfo = await req.user;
  let findUser = await user.findOne({ email: `${userInfo.email}` });
  let postCreated = await post.create({ content });
  await postCreated.userId.push(findUser._id);
  await findUser.posts.push(postCreated._id);
  await postCreated.save();
  await findUser.save();
  res.status(200).json({ message: "post Created" });
};

const postImage = async (req, res) => {
  console.log("jumanji");
};

module.exports = { postadd, postImage };
