const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const { register, login } = require("../Controllers/userController");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.post("/signup", register);
router.post("/login", login);

module.exports = router;
