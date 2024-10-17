import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CountryCode from "./CountryCode.json";
import axios from "axios";
import { toast } from "react-hot-toast";
import { DEMO_API_ROUTES } from "../../service/APIURL/Api"; // Adjust the path as needed

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const formData = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      companyName: "", // Set this to empty as it is not in the contact form
      phoneno: data.phoneno,
      countryCode: data.dropdown, // Using dropdown for country code
      message: data.message,
      formType: "contact", // Specify that this is a contact form
    };

    try {
      const response = await axios.post(DEMO_API_ROUTES.SAVE_QUERY, formData);

      toast.success("Your message has been sent successfully!");
      // Reset the form if needed
    } catch (error) {
      console.error("An error occurred while submitting the form.", error);
      toast.error("An error occurred while sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="w-full flex flex-col gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col lg:flex-row gap-6">
        {/* First Name */}
        <div className="flex flex-col lg:w-1/2">
          <input
            type="text"
            {...register("firstname", { required: "First name is required" })}
            placeholder="Enter First Name"
            className={`p-3 border rounded shadow-sm ${
              errors.firstname ? "border-red-500" : ""
            }`}
          />
          {errors.firstname && (
            <p className="text-red-500">{errors.firstname.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div className="flex flex-col lg:w-1/2">
          <input
            type="text"
            {...register("lastname", { required: "Last name is required" })}
            placeholder="Enter Last Name"
            className={`p-3 border rounded shadow-sm ${
              errors.lastname ? "border-red-500" : ""
            }`}
          />
          {errors.lastname && (
            <p className="text-red-500">{errors.lastname.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          placeholder="Enter Email"
          className={`p-3 border rounded shadow-sm ${
            errors.email ? "border-red-500" : ""
          }`}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      {/* Phone Number */}
      <div className="flex flex-col">
        <div className="flex gap-3">
          <select
            {...register("dropdown", { required: "Country code is required" })}
            className={`p-3 border rounded shadow-sm w-24 ${
              errors.dropdown ? "border-red-500" : ""
            }`}
          >
            {CountryCode.map((element, index) => (
              <option key={index} value={element.code}>
                {element.code} - {element.country}
              </option>
            ))}
          </select>
          <input
            type="text"
            {...register("phoneno", { required: "Phone number is required" })}
            placeholder="12345 67890"
            className={`p-3 border rounded shadow-sm flex-grow ${
              errors.phoneno ? "border-red-500" : ""
            }`}
          />
          {errors.phoneno && (
            <p className="text-red-500">{errors.phoneno.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col">
        <textarea
          {...register("message", { required: "Message is required" })}
          cols="30"
          rows="5"
          placeholder="Enter Your message here"
          className={`p-3 border rounded shadow-sm ${
            errors.message ? "border-red-500" : ""
          }`}
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="self-start">
        <button
          className="btn-tab btn-base-color"
        
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactUsForm;
