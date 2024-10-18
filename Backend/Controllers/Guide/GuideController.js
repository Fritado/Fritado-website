const Guide = require("../../Models/Guide/Guide");
const multer = require("multer");
const path = require("path");

// Set up Multer storage and file naming
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "guide/"); // Specify the upload directory
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // Limit file size to 5MB
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error("Only images are allowed (jpeg, jpg, png)!"));
    }
  },
});

// Save guide logic
exports.saveGuide = [
  upload.single("guideImage"), // Handle image upload
  async (req, res) => {
    try {
      const {
        guideTopic,
        guideCategory,
        guideKeywords,
        guideDescription,
        guideVideo,
        status,
      } = req.body;

      const newGuide = new Guide({
        guideTopic,
        guideCategory,
        guideKeywords: guideKeywords ? guideKeywords.split(",") : [],
        guideDescription,
        guideVideo,
        guideImage: req.file ? req.file.path : null, // Save image path if uploaded
        status: status || "Draft",
      });

      const savedGuide = await newGuide.save();

      res
        .status(201)
        .json({ message: "Guide saved successfully", data: savedGuide });
    } catch (error) {
      console.error("Error saving Guide:", error);
      res.status(500).json({
        message: "Server error while saving Guide",
        error: error.message,
      });
    }
  },
];

// Function to fetch all blogs
exports.getGuide = async (req, res) => {
  try {
    // Fetch all blogs
    const Guides = await Guide.find();
    res.status(200).json({
      message: "Blogs fetched successfully",
      data: Guides,
    });
  } catch (error) {
    console.error("Error fetching guides:", error);
    res.status(500).json({
      message: "Server error while fetching Guides",
      error: error.message,
    });
  }
};

exports.getGuideById = async (req, res) => {
  try {
    const guideId = req.params.id;
    const guide = await Guide.findById(guideId);

    if (!guide) {
      return res.status(404).json({ message: "Guide not found" });
    }

    res.status(200).json({
      message: "Guide fetched successfully",
      data: guide,
    });
  } catch (error) {
    console.error("Error fetching guide by ID:", error);
    res.status(500).json({
      message: "Server error while fetching Guide",
      error: error.message,
    });
  }
};



exports.updateGuideById = async (req, res) => {
  try {
    const guideId = req.params.id;
    const {
      guideTopic,
      guideCategory,
      guideKeywords,
      guideDescription,
      guideVideo,
      status,
    } = req.body;

    // Construct the update object dynamically
    const updateData = {
      ...(guideTopic !== undefined && { guideTopic }),
      ...(guideCategory !== undefined && { guideCategory }),
      ...(guideDescription !== undefined && { guideDescription }),
      ...(guideVideo !== undefined && { guideVideo }),
      ...(status !== undefined && { status }),
      ...(Array.isArray(guideKeywords) && { guideKeywords: [...new Set(guideKeywords)] }), // Remove duplicates
      updatedAt: Date.now(), // Always update the timestamp
    };
 // Handle image upload if present
 if (req.file) {
  updateData.guideImage = req.file.path; // Path where the image is stored
}
    const updatedGuide = await Guide.findByIdAndUpdate(guideId, updateData, { new: true });

    if (!updatedGuide) {
      return res.status(404).json({ message: "Guide not found" });
    }

    res.status(200).json({
      message: "Guide updated successfully",
      data: updatedGuide,
    });
  } catch (error) {
    console.error("Error updating guide:", error);
    res.status(500).json({
      message: "Server error while updating Guide",
      error: error.message,
    });
  }
};


// Function to delete guide by ID
exports.deleteGuideById = async (req, res) => {
  try {
    const guideId = req.params.id;
    const deletedGuide = await Guide.findByIdAndDelete(guideId);

    if (!deletedGuide) {
      return res.status(404).json({ message: "Guide not found" });
    }

    res.status(200).json({
      message: "Guide deleted successfully",
      data: deletedGuide,
    });
  } catch (error) {
    console.error("Error deleting guide:", error);
    res.status(500).json({
      message: "Server error while deleting Guide",
      error: error.message,
    });
  }
};
