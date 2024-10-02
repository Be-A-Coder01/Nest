const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRouter = require("./Routers/userRouter");
const postRouter = require("./Routers/postRouter");

app.use("/", userRouter);
app.use("/", postRouter);

app.get("/", (req, res) => {
  res.send("Helo");
});

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Connected Successfully...");
    app.listen(process.env.PORT, () => {
      console.log(`Port is listening at ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
