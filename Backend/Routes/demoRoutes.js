const express = require("express");
const { demoFormQuery } = require("../Controllers/Demo/Demo");

const router = express.Router();
router.post("/submit/demo-request", demoFormQuery);

module.exports = router;
