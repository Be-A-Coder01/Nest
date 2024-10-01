const express = require("express");
const app = express();
const user = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

app.use(cors());

const register = async (req, res) => {
  let { name, userName, email, password, number, city, country } = req.body;

  if (!name || !userName || !email || !password || !number || !city || !country)
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
  let { userName, email, password } = req.body;

  let checkUser = await user.findOne({ email });

  if (!checkUser)
    return res.status(400).json({ message: "Something went wrong" });

  const autenticate = await bcrypt.compare(password, checkUser.password);

  if (autenticate) {
    let token = jwt.sign(
      { email: email, password: password },
      process.env.jwtKey
    );

    res.status(200).json({ token: token });
  } else {
    return res.status(400).json({ error: "Login not completed" });
  }
};

module.exports = { register, login };
