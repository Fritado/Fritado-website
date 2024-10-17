import React, { useState } from "react";
import CountryCode from "../ContactUs/CountryCode.json";
import axios from "axios";
import { toast } from "react-hot-toast";
import { DEMO_API_ROUTES } from "../../service/APIURL/Api";

const DemoForm = () => {
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
    try {
      const response = await axios.post(url, formData);
      toast.success("Your message has been sent successfully!");
    } catch (error) {
      toast.error("An error occurred while sending your message.");
      console.log("An error occurred while submitting the form.", error);
    }
  };

  return (
    <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
      {/* Form Fields */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex flex-col lg:w-1/2">
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First name"
            className="p-3 border rounded shadow-sm"
            onChange={handleChange}
            value={formData.firstname}
          />
        </div>
        <div className="flex flex-col lg:w-1/2">
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Last name"
            className="p-3 border rounded shadow-sm"
            onChange={handleChange}
            value={formData.lastname}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="p-3 border rounded shadow-sm"
          onChange={handleChange}
          value={formData.email}
        />
      </div>

      <div className="flex flex-col">
        <input
          type="text"
          name="companyName"
          id="companyName"
          placeholder="Company name"
          className="p-3 border rounded shadow-sm"
          onChange={handleChange}
          value={formData.companyName}
        />
      </div>

      <div className="flex flex-col">
        <div className="flex gap-3">
          <select
            name="countryCode"
            id="countryCode"
            className="p-3 border rounded shadow-sm w-24"
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
            className="p-3 border rounded shadow-sm flex-grow"
            onChange={handleChange}
            value={formData.phoneno}
          />
        </div>
      </div>

      {/* Message Field */}
      <div className="flex flex-col">
        <textarea
          name="message"
          id="message"
          placeholder="Your message"
          className="p-3 border rounded shadow-sm"
          onChange={handleChange}
          value={formData.message}
          rows={2}
        />
      </div>

      <div className="self-start">
        <button className="btn-tab btn-base-color cursor-pointer">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default DemoForm;
