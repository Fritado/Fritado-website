import React, { useState } from "react";
import CountryCode from "../ContactUs/CountryCode.json";
import axios from "axios";
import { DEMO_API_ROUTES } from "../../service/APIURL/Api";

const DemoForm = () => {
  const [formStatus, setFormStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    companyName: "",
    phoneno: "",
    countryCode: "",
    message: "",
    formType: "demo",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    const url = `${DEMO_API_ROUTES.SAVE_QUERY}`;
    e.preventDefault();
    setIsSending(true);
    setFormStatus({});

    try {
      const response = await axios.post(url, formData);
      setFormStatus({
        type: "success",
        message: "Your message has been sent successfully!",
      });

      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        companyName: "",
        phoneno: "",
        countryCode: "",
        message: "",
        formType: "demo",
      });
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "An error occurred while sending your message.",
      });
      console.log("An error occurred while submitting the form.", error);
    } finally {
      setIsSending(false);
      setFormStatus({});
    }
  };

  return (
    <div className="demo-form">
      <form className="flex flex-col demo-query-from" onSubmit={handleSubmit}>
        {/* Form Fields */}
        <div className="flex flex-row gap-2 form-div">
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First name"
            className="p-2 rounded"
            onChange={handleChange}
            value={formData.firstname}
          />

          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Last name"
            className="p-2 rounded"
            onChange={handleChange}
            value={formData.lastname}
          />
        </div>

        <div className="form-div">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="p-2 rounded"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div className="form-div">
          <input
            type="text"
            name="companyName"
            id="companyName"
            placeholder="Company name"
            className="p-2 rounded"
            onChange={handleChange}
            value={formData.companyName}
          />
        </div>

        <div className="form-div">
          <div className="flex gap-3">
            <select
              name="countryCode"
              id="countryCode"
              className="p-2 rounded  w-24"
              onChange={handleChange}
              value={formData.countryCode}
            >
              {CountryCode.map((element, index) => (
                <option key={index} value={element.code}>
                  {element.code} - {element.country}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="phoneno"
              id="phoneno"
              placeholder="Mobile"
              className="p-2 rounded"
              onChange={handleChange}
              value={formData.phoneno}
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="form-div">
          <textarea
            name="message"
            id="message"
            placeholder="Your message"
            className="p-2 rounded"
            onChange={handleChange}
            value={formData.message}
            rows={2}
          />
        </div>

        <div className="self-start  flex items-center gap-3">
          <button
            className="btn-tab btn-base-color cursor-pointer"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
          {formStatus && (
            <span
              className={`text-sm ${
                formStatus.type === "success"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {formStatus.message}
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default DemoForm;
