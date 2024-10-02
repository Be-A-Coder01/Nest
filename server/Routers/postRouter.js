const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");

const postController = require("../Controllers/postController");

app.use(cors());
app.use(express.json());

router.post("/posts", postController);

module.exports = router;
