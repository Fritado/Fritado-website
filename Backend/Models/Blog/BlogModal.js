const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  blogTopic: {
    type: String,
    required: false,
    trim: true,
  },
  blogCategory: {
    type: String,
    required: false,
    trim: true,
  },
  keywords: {
    type: [String],
    required: false,
  },
  uploadImage: {
    type: String,
    required: false,
  },
  videoUrl: {
    type: String,
    required: false,
  },
  blogDescription: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ["Draft", "Published"],
    default: "Draft",
  },
  publishedBy: {
    type: String,
    default: "Admin",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to update the updatedAt field before save
blogSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
