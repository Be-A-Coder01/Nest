const user = require("../Models/userModel");
const post = require("../Models/postModel");

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const postadd = async (req, res) => {
  console.log("agaya");
  let { content } = await req.body;
  console.log(content, "dek");
  res.status(200).json({ message: "done see once" });
};

module.exports = postadd;
