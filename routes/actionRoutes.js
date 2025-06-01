const express = require("express");
const router = express.Router();
const { addToAction } = require("../controllers/actionController");

router.post("/", addToAction);

module.exports = router;
