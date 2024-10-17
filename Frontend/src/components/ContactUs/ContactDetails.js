import React from "react";
import ContactDetailCard from "./ContactDetailCard";

const contactDetails = [
  {
    icon: "IoLocation",
    heading: "Address",
    description1: "Fritado Technologies Private Limited",
    description2:
      "No. 8, CMH Road, 2nd Stage, Indiranagar, Bengaluru, Karnataka - 560 038",
    details: "",
  },

  {
    icon: "IoCall",
    heading: "Call us",
    description1: "Mon - Fri From 10am to 6pm",
    description2: "",
    details: "+91 97411 56389",
  },
  {
    icon: "IoMail",
    heading: "Email",
    description1: "support@fritado.com",
    description2: "",
    details: "",
  },
];

const ContactDetails = () => {
  return (
    <div className="contact-page head-div">
    {contactDetails.map((detail, index) => (
      <ContactDetailCard
        key={index}
        icon={detail.icon}
        heading={detail.heading}
        description1={detail.description1}
        description2={detail.description2}
        details={detail.details}
      />
    ))}
  </div>
  );
};

export default ContactDetails;
