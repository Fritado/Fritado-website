const DemoForm = require("../../Models/Demo/Demo"); // Adjust the path as needed
const nodemailer = require("nodemailer");



// Save form data and send an email
exports.demoFormQuery = async (req, res) => {
  const { firstname, lastname, email, companyName, phoneno, countryCode, message, formType } = req.body;

  try {
    // Save to MongoDB
    const formData = new DemoForm({
      firstname,
      lastname,
      email,
      companyName,
      phoneNo: phoneno,
      countryCode,
      message, // Include the message from frontend
      formType, // Include the form type (demo/contact)
    });
    await formData.save();

    // Send an email
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Replace with your company's SMTP host
      port: 587, // Use port 587 for TLS (or 465 for SSL if required)
      secure: false, // Set to true if you use port 465
      auth: {
        user: "anishakumari0423@gmail.com",
        pass: "rcjuxzxcwwfeskir", 
      },
      tls: {
        rejectUnauthorized: false, // This allows self-signed certificates (use only if necessary)
      },
    });

    const mailOptions = {
      from: `${email}`, // sender address
      to: "support@fritado.com", // list of receivers
      subject: formType === "demo" ? "New Demo Request" : "New Contact Inquiry", // Change subject based on form type
      text: `A new ${formType} request has been submitted: 
             Name: ${firstname} ${lastname}
             Email: ${email}
             Company Name: ${companyName}
             Phone Number: ${countryCode} ${phoneno}
             Message: ${message}`, // Include the message
    };

    await transporter.sendMail(mailOptions);

    res
      .status(200)
      .json({ message: "Form submitted successfully and email sent." });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while submitting the form." });
    console.log(error, "An error occurred while submitting the form");
  }
};

