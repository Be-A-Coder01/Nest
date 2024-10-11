const user = require("../Models/userModel");
const post = require("../Models/postModel");

const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.static("uploads"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const postadd = async (req, res) => {
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
  const imageName = req.file.filename;
  const userInfo = req.user;

  try {
    const uploadImage = await post.create({
      postImage: imageName,
      userId: userInfo._id,
    });

    const userId = await user.find({ email: userInfo.email });
    await userId[0].posts.push(uploadImage._id);

    await uploadImage.save();
    await userId[0].save();
  } catch (error) {
    res.status(201).json({ message: "post uploaded" });
  }
};

const postData = async (req, res) => {
  let data = await post.find({});
  // console.log(data);
  res.status(201).json(data.reverse());
};

module.exports = { postadd, postImage, postData };
