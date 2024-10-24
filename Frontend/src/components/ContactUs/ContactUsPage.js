import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlineLiveHelp } from "react-icons/md";
import { Link } from "react-router-dom";

const ContactUsPage = () => {
  return (
    <div className=" container demo-container ">
      <div className=" border support-card">
        <div className="content contact-support-card-left">
          <h2 className="">Call Us</h2>

          <div className="my-3">
            <b>Contact our support team</b>
            <p>USA +1 667-240-7940 </p>
            <p>India +91 974-115-6389 </p>
            <p>Everyday 9:00 am - 7:00 pm.</p>
          </div>
          <div className="my-3">
            <p className="d-flex align-items-center">
              <MdOutlineLiveHelp className="help-icon" />
              Questions? go to &nbsp;{" "}
              <Link to="/help-center">
                <b className="help-center">Help Center</b>
              </Link>
            </p>
          </div>
        </div>
        {/* section2 */}
        <div className="content contact-support-card-right">
          <h2>Chat Now</h2>

          <div>
            <b>
              Chat for quick help on product issues, your account,
              <br /> and more.
            </b>
          </div>
          <div className="d-flex  gap-2 my-3">
            <div className="chat-btn chat-color-btn">
              <div className="chat-button-inner ">
                <IoChatboxEllipsesOutline className="chat-icon" /> Start
                Chatting
              </div>
            </div>
            <div className="chat-btn">
              <Link to="https://api.whatsapp.com/send/?phone=919741156389&text=I%27m+interested+to+enhance+traffic+using+AI-powered+SEO+strategies+.&type=phone_number&app_absent=0" target="_blank">
              <div className="chat-button-inner whatsapp-color">
                <BsWhatsapp className="chat-icon" />
                Whatsapp
              </div>
              </Link>
            </div>
          </div>
          <p>Hours: 24x7 Chat</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
