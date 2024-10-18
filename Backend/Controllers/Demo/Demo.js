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
      message,
      formType, 
    });
    await formData.save();

    // Send an email
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", 
      port: 587,
      secure: false, 
      auth: {
        user: "anishakumari0423@gmail.com",
        pass: "rcjuxzxcwwfeskir", 
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: `${email}`,
      to: "support@fritado.com", 
      subject: formType === "demo" ? "New Demo Request" : "New Contact Inquiry", 
      text: `A new ${formType} request has been submitted: 
             Name: ${firstname} ${lastname}
             Email: ${email}
             Company Name: ${companyName}
             Phone Number: ${countryCode} ${phoneno}
             Message: ${message}`,
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

