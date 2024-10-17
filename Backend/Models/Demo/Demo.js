const mongoose = require("mongoose");

const demoFormSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  companyName: { type: String },
  phoneNo: { type: String, required: true },
  countryCode: { type: String, required: true },
  message: { type: String, default: "Request for Demo" },
  formType: { type: String, required: true, enum: ["demo", "contact"] },
});

const DemoForm = mongoose.model("DemoForm", demoFormSchema);
module.exports = DemoForm;
