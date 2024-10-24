import React from "react";

const contactDetails = [
  {
    heading: "Texas, USA",
    description1: "25623 Moreleigh Street, Katy, TEXAS 77493 USA",
  },

  {
    heading: "Bengaluru ,India",
    description1:
      "No. 8, CMH Road, 2nd Stage, Indiranagar, Bengaluru, Karnataka - 560 038",
  },
];

const ContactDetails = () => {
  return (
    <div className="container">
      <div className=" text-center" style={{margin:"4rem 0 2rem 0"}}>
        <h2 className="heading">Our Offices</h2>
      </div>
      <div className="contact-page ">
        {contactDetails.map((detail, index) => (
          <div className="contact-card">
            <div className="content" key={index}>
              <h3>{detail.heading}</h3>
              <p>{detail.description1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactDetails;
