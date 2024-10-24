import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import CountryCode from "./CountryCode.json";
import axios from "axios";
import { DEMO_API_ROUTES } from "../../service/APIURL/Api"; 

const ContactUsForm = () => {
  const [formStatus, setFormStatus] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(CountryCode);
  const [selectedCountryCode, setSelectedCountryCode] = useState("");

  useEffect(() => {
    const getCountryCode = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;

            try {
              const response = await axios.get(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
              );

              const countryCode = response.data.countryCode; // Extract country code
              console.log("Fetched country code:", countryCode); // Debug log

              // Find the corresponding country object in your CountryCode array
              const countryObj = CountryCode.find(
                (element) => element.code === countryCode
              );

              if (countryObj) {
                setValue("dropdown", countryObj.code); // Set the dropdown value
                setSelectedCountryCode(countryObj.code); // Set selected country code for input
              } else {
                console.warn(
                  "Country code not found in the CountryCode list:",
                  countryCode
                );
              }
            } catch (error) {
              console.error("Failed to fetch country code:", error); // Log any error
            }
          },
          (error) => {
            console.error("Geolocation error:", error); // Log any geolocation error
          }
        );
      } else {
        console.warn("Geolocation is not supported by this browser.");
      }
    };

    getCountryCode();
  }, [setValue]);

  // Update filteredCountries based on the search term
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filtered = CountryCode.filter((country) =>
      country.country.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  const handleCountryCodeSelect = (code) => {
    setSelectedCountryCode(code);
    setValue("dropdown", code);
    setFilteredCountries(CountryCode);
    setSearchTerm("");
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setFormStatus({});
    const formData = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      companyName: "",
      phoneno: data.phoneno,
      countryCode: data.dropdown,
      message: data.message,
      formType: "contact",
    };

    try {
      const response = await axios.post(DEMO_API_ROUTES.SAVE_QUERY, formData);

      setFormStatus({
        type: "success",
        message: "Your message has been sent successfully!",
      });
    } catch (error) {
      console.error("An error occurred while submitting the form.", error);
      setFormStatus({
        type: "error",
        message: "An error occurred while sending your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="demo-form">
      <h1 className="widget-title text-center">Send Us A Message</h1>
      <form
        className="flex flex-col demo-query-from mt-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-row gap-2 form-div">
          <input
            type="text"
            {...register("firstname", { required: "First name is required" })}
            placeholder="Enter First Name"
            className={`p-2 rounded ${
              errors.firstname ? "border-red-500" : ""
            }`}
          />
          {errors.firstname && (
            <p className="text-red-500">{errors.firstname.message}</p>
          )}

          <input
            type="text"
            {...register("lastname", { required: "Last name is required" })}
            placeholder="Enter Last Name"
            className={`p-2 rounded  ${
              errors.lastname ? "border-red-500" : ""
            }`}
          />
          {errors.lastname && (
            <p className="text-red-500">{errors.lastname.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="form-div">
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Enter Email"
            className={`p-2  rounded  ${errors.email ? "border-red-500" : ""}`}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Number */}

        <div className="form-div">
          <div className="flex gap-3">
            <input
              type="text"
              value={selectedCountryCode}
              onChange={(e) => handleSearch(e)} // Handle search input
              placeholder="Country Code"
              className={`p-2 rounded w-24 ${
                errors.dropdown ? "border-red-500" : ""
              }`}
            />
            {/* Dropdown for filtered countries */}
            {searchTerm && (
              <div className="absolute bg-white border border-gray-300 max-h-60 overflow-y-auto">
                {filteredCountries.map((country, index) => (
                  <div
                    key={index}
                    onClick={() => handleCountryCodeSelect(country.code)}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                  >
                    {country.code} - {country.country}
                  </div>
                ))}
              </div>
            )}
            <input
              type="text"
              {...register("phoneno", { required: "Phone number is required" })}
              placeholder="12345 67890"
              className={`p-2 rounded ${
                errors.phoneno ? "border-red-500" : ""
              }`}
            />
            {errors.phoneno && (
              <p className="text-red-500">{errors.phoneno.message}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="form-div">
          <textarea
            {...register("message", { required: "Message is required" })}
            cols="30"
            rows="5"
            placeholder="Enter Your message here"
            className={`p-2 rounded  ${errors.message ? "border-red-500" : ""}`}
          />
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="self-start  flex items-center gap-3">
          <button
            className="btn-tab btn-base-color  cursor-pointer"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
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

export default ContactUsForm;
