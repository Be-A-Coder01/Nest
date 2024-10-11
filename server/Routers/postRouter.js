const express = require("express");
const app = express();
const router = express.Router();
const jwt = require("jsonwebtoken");
const user = require("../Models/userModel");
const cors = require("cors");

const multer = require("multer");

app.use(express.static("uploads"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

const {
  postadd,
  postImage,
  postData,
} = require("../Controllers/postController");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.post("/posts", isLoggedIn, postadd);
router.post("/postsImage", isLoggedIn, upload.single("postImage"), postImage);
router.get("/postData", postData);

async function isLoggedIn(req, res, next) {
  let token = req.headers.authorization;
  if (!token) return res.status(400).json({ message: "You are not logged in" });
  var decoded = jwt.verify(token, process.env.jwtKey);
  // console.log(decoded.email);
  let email = decoded.email;
  const userDetail = await user.findOne({ email });
  req.user = userDetail;
  next();
}

module.exports = router;
