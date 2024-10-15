const express = require("express");
const app = express();
const user = require("../Models/userModel");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

app.use(cors());
dotenv.config();

const register = async (req, res) => {
  let { name, userName, email, password, number, city, country, profession } =
    req.body;

  if (
    !name ||
    !userName ||
    !email ||
    !password ||
    !number ||
    !city ||
    !country ||
    !profession
  )
    return res.status(400).json({ message: "fill the required fields" });

  let checkUser = await user.findOne({ email });

  if (checkUser) return res.status(401).json({ message: "user already exist" });

  bcrypt.genSalt(12, function (err, salt) {
    bcrypt.hash(password, salt, async function (err, hash) {
      try {
        let userRegistered = await user.create({
          name,
          userName,
          email,
          password: hash,
          number,
          city,
          country,
          profession,
        });
        let token = jwt.sign(
          {
            email: email,
            password: userRegistered.password,
          },
          process.env.jwtKey
        );
        res.status(201).json({
          userRegistered,
          token: token,
          message: "User Registered Successfully",
        });
      } catch (error) {
        res.status(400).json({
          message: "Not registered , something went wrong , try again",
        });
      }
    });
  });
};

const login = async (req, res) => {
  let { email, password } = req.body;

  let checkUser = await user.findOne({ email });

  if (!checkUser) {
    return res.status(401).json({ message: "User not found , plz sign up" });
  }

  const autenticate = await bcrypt.compare(password, checkUser.password);

  if (autenticate) {
    let token = jwt.sign(
      { email: email, password: password },
      process.env.jwtKey
    );

    res
      .status(200)
      .json({ checkUser, token: token, message: "Login successfull" });
  } else {
    return res.status(400).json({ error: "Login not completed" });
  }
};

const userList = async (req, res) => {
  const userList = (await user.find({})).filter(
    (user) => user.email != req.user.email
  );
  res.status(200).json({ userList });
};

module.exports = { register, login, userList };
