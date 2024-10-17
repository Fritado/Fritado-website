const Identity = require("../Models/Identity");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.loginUser = async (req, res) => {
  const { email, password } = req.body; // Destructure here, inside the function

  try {
    // Find the user by email
    const user = await Identity.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Check if the password matches
    // const isMatch = await bcrypt.compare(password, user.password);
    // console.log("Password match: ", isMatch); 
    // if (!isMatch) {
    //   return res.status(401).json({ message: "Invalid email or password" });
    // }

    // Create a JWT token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || "your_jwt_secret",
      {
        expiresIn: "5h", // Token expiration time
      }
    );

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
