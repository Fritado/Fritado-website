
const express = require("express");
const { loginUser } = require("../Controllers/Identity"); // Adjust path as necessary
const router = express.Router();

router.post("/login", loginUser); // Set up login route

module.exports = router;
