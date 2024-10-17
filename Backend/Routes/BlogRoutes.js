const express = require("express");
const { saveBlog, upload , getBlogs ,getBlogByID , updateBlogByID  ,deleteBlogById ,getLatestBlogs} = require("../Controllers/Blog/Blog");

const router = express.Router();

// Route to save a new blog, with image upload
router.post("/blog/save", upload.single("uploadImage"), saveBlog); 
router.get('/blog/fetchblogs', getBlogs);
router.get('/blog/fetch-blog-by/:id',getBlogByID);
router.put('/blog/update/:id', upload.single("uploadImage"), updateBlogByID);
router.delete("/blogs/delete/:id" , deleteBlogById );
router.get('/blog/fetch-latest-blogs', getLatestBlogs);

module.exports = router;
