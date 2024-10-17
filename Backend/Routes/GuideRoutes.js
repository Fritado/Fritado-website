const express = require("express");
const { saveGuide ,getGuide ,getGuideById  ,deleteGuideById ,updateGuideById } = require("../Controllers/Guide/GuideController");

const router = express.Router();

// Route to save a new blog, with image upload
router.post("/guide/save", saveGuide);
router.get("/guide/fetch", getGuide);
router.get("/guide/fetch-by/:id" , getGuideById );
router.put("/guide/update-by/:id",updateGuideById);
router.delete("/guide/delete/-by/:id" ,deleteGuideById )



module.exports = router;
