const mongoose = require("mongoose");

const guideSchema = new mongoose.Schema({
  guideTopic: {
    type: String,
    required: false,
    trim: true,
  },
  guideCategory: {
    type: String,
    required: false,
    trim: true,
  },
  guideKeywords: {
    type: [String],
    required: false,
  },
  guideVideo: {
    type: String,
    required: false,
  },

  guideDescription: {
    type: String,
    required: false,
    trim: true,
  },
  guideImage: {
    type: String, // Store the image path or URL
    required: false,
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


const Guide = mongoose.model("Guide", guideSchema);

module.exports = Guide;
