const mongoose = require("mongoose")
require("dotenv").config();
const Identity = require("../Models/Identity")
const bcrypt = require("bcrypt");

exports.connect = async() =>{
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log("Fritado DB Connected successfully");   
        // Call the function to create hardcoded users
        await createHardcodedUsers();
      } catch (error) {
        console.log("Fritado DB Connection Failed");
        console.error(error);
        process.exit(1);
      }
}

const createHardcodedUsers = async () => {
    try {
      // Check if the user already exists
      const existingUser = await Identity.findOne({ email: "anishakumari200023@gmail.com" });
      if (existingUser) {
        console.log("User already exists. Skipping hardcoded user creation.");
        return;
      }
  
      // Hash the password
     // const hashedPassword = await bcrypt.hash("password123", 10); // Use bcrypt to hash the password
  
      // Hardcoded user data
      const users = [
        {
          firstname: "Anisha",
          lastname: "Singh",
          email: "anishakumari200023@gmail.com",
          password: "password123"// Store the hashed password
        },
      ];
  
      // Insert the hardcoded user into the collection
      await Identity.insertMany(users);
      console.log("Hardcoded users inserted!");
    } catch (error) {
      console.error("Error inserting users: ", error);
    }
  };