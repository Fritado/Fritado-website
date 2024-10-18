import React from "react";
import ContactUsForm from "./ContactUsForm";
import { IoLocation, IoCall, IoMail } from "react-icons/io5";


const ContactPage = () => {
  return (
    <div className="head-div">
      <div className=" container demo-container  ">
        {/* section1 */}

        <div className="d-flex flex-col contact-section-1">
        <div className="overlay"></div>
        <div className="d-flex flex-col justify-content-center my-auto">
          <div className="contact-detail-section my-3">
            <div className="d-flex flex-row align-items-center gap-4 my-3">
              <span>
                <IoLocation size={22} />
              </span>
              <h2>Address</h2>
            </div>
            <p className="demo-para ps-5 ">
              {/* No. 8, CMH Road, 2nd Stage, Indiranagar,Bengaluru, Karnataka - 560
              038 */}
            </p>
          </div>
          <div className="contact-detail-section my-3">
            <div className="d-flex flex-row gap-4 my-2">
              <span>
                <IoCall size={22} />
              </span>
              <h2 className="detail-font-color">Let's tak</h2>
            </div>
            <p className="demo-para ps-5 ">+91 97411 56389</p>
          </div>

          <div className="contact-detail-section my-3">
            <div className="d-flex flex-row gap-4 py-2">
              <span>
                <IoMail size={22} />
              </span>
              <h2>Client care</h2>
            </div>
            <p className="demo-para ps-5 ">support@fritado.com</p>
          </div>
          </div>
        </div>
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactPage;
