const Blog = require("../../Models/Blog/BlogModal");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Define the upload path
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    // Save the file with its original name
    cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to avoid filename collisions
  },
});
const upload = multer({ storage });

// Save blog logic
const saveBlog = async (req, res) => {
  try {
    const {
      blogTopic,
      blogCategory,
      keywords,
      videoUrl,
      blogDescription,
      status,
    } = req.body;

    const uploadImage = req.file ? path.join("uploads", req.file.filename) : "";
    // console.log("Uploaded file path:", uploadImage);

    const newBlog = new Blog({
      blogTopic,
      blogCategory,
      keywords: keywords || [],
      uploadImage,
      videoUrl: videoUrl || "",
      blogDescription,
      status: status || "Draft",
    });

    // Save blog in the database
    const savedBlog = await newBlog.save();

    // Respond with success and the saved blog object
    res
      .status(201)
      .json({ message: "Blog saved successfully", data: savedBlog });
  } catch (error) {
    console.error("Error saving blog:", error);
    res.status(500).json({
      message: "Server error while saving blog",
      error: error.message,
    });
  }
};

// Function to fetch all blogs
const getBlogs = async (req, res) => {
  try {
    // Fetch all blogs
    const blogs = await Blog.find();
    res.status(200).json({
      message: "Blogs fetched successfully",
      data: blogs,
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({
      message: "Server error while fetching blogs",
      error: error.message,
    });
  }
};

//fetch blog by blogId

const getBlogByID = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json(blog);
  } catch (Error) {
    console.error("Error fetching blog by ID:", Error);
    res.status(500).json({ message: "Server error" });
  }
};

const getLatestBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }).limit(3);
    
    res.status(200).json({
      message: "Latest blogs fetched successfully",
      data: blogs,
    });
  } catch (error) {
    console.error("Error fetching latest blogs:", error);
    res.status(500).json({
      message: "Server error while fetching latest blogs",
      error: error.message,
    });
  }
};

//edit blog by its id
const updateBlogByID = async (req, res) => {
  const { id } = req.params;
  const {
    blogTopic,
    blogCategory,
    keywords,
    videoUrl,
    blogDescription,
    status,
  } = req.body;

  try {
    const updatedData = {
      blogTopic,
      blogCategory,
      keywords: keywords.split(",").map((keyword) => keyword.trim()), // Splitting keywords
      videoUrl,
      blogDescription,
      status,
    };

    if (req.file) {
      updatedData.uploadImage = req.file.path; // Save the file path
    }

    const updatedBlog = await Blog.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!updatedBlog) {
      return res.status(404).send("Blog not found");
    }

    res.send(updatedBlog);
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).send("Server error");
  }
};

const deleteBlogById = async (req, res) => {
  const { id } = req.params;

  try {
    // Find blog by ID and delete it
    const blog = await Blog.findByIdAndDelete(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting blog", error });
  }
};

module.exports = {
  saveBlog,
  upload,
  getBlogs,
  getBlogByID,
  updateBlogByID,
  deleteBlogById,
  getLatestBlogs,
};
