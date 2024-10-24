import React from "react";
import {
  FaChevronRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ScrollUp from "./ScrollUp";

const FooterFour = () => {
  return (
    <>
      <footer className="footer-area bg-cover full-width-footer  pd-top-100">
        <div className="footer-subscribe"></div>
        <div className="container-fluid px-5">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="">
                <img
                  src={"/assets/img/logo-white.png"}
                  style={{ width: "180px" }}
                  alt="Logo"
                />
              </div>
              <div className="widget widget-recent-post">
                <div className="widget widget_contact">
                  {/* <ul className="details">
                    <li className="d-flex position-relative">
                      <span className="li-icon">
                        <FaPhoneAlt className="sky" />USA +1 667-240-7940
                      </span>
                    </li>
                    <li className="mt-3 d-flex position-relative">
                      <span className="li-icon">
                      
                       India +91 974-115-6389 
                      </span>
                    </li>
                    <li className="mt-2 d-flex position-relative">
                      <span className="li-icon">
                        <FaEnvelope className="sky" /> support@fritado.com{" "}
                      </span>
                    </li>
                  </ul> */}
                  <p className="text-white py-2">
                    In a digital age where visibility and reach are key to
                    business success, Fritado offers an AI-driven approach that
                    simplifies and enhances SEO processes, making it easier for
                    companies to grow online. With a comprehensive platform that
                    automates up to 90% of SEO tasks and a variety of
                    complementary services, Fritado not only empowers businesses
                    but also helps shape the future of digital marketing.
                  </p>
                  <ul className="social-media mt-4">
                    <li className="">
                      <a
                        href="https://www.facebook.com/fritado"
                        className="sky"
                      >
                        <FaFacebookF />
                      </a>
                    </li>

                    <li>
                      <a href="https://www.instagram.com/" className="sky">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/fritado-com/?viewAsMember=true"
                        className="sky"
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 ps-xl-5">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Our Service</h4>
                <ul>
                  <li className="sky">
                    <Link to="/">
                      <span className="li-icon">
                        <FaChevronRight /> Home
                      </span>
                    </Link>
                  </li>
                  <li className="sky">
                    <Link to="/about">
                      <span className="li-icon">
                        <FaChevronRight /> About
                      </span>
                    </Link>
                  </li>
                  <li className="sky">
                    <Link to="/solutions">
                      <span className="li-icon">
                        <FaChevronRight /> Solutions
                      </span>
                    </Link>
                  </li>
                  <li className="sky">
                    <Link to="/pricing">
                      <span className="li-icon">
                        <FaChevronRight /> Pricing
                      </span>
                    </Link>
                  </li>
                  <li className="sky">
                    <Link to="/Research-and-development">
                      <span className="li-icon">
                        <FaChevronRight /> R&D Center
                      </span>
                    </Link>
                  </li>
                  <li className="sky">
                    <Link to="/support">
                      <span className="li-icon">
                        <FaChevronRight /> Contact Us
                      </span>
                    </Link>
                  </li>
                  <li className="sky">
                    <Link to="/terms-and-condition">
                      <span className="li-icon">
                        <FaChevronRight /> Terms & Conditions
                      </span>
                    </Link>
                  </li>
                  <li className="sky">
                    <Link to="/privacy-policy">
                      <span className="li-icon">
                        <FaChevronRight /> Privacy Policy
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 ps-xl-5 ">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Resources</h4>
                <ul>
                  <li className="sky">
                    <Link to="/blog">
                      <span className="li-icon">
                        <FaChevronRight /> Blog
                      </span>
                    </Link>
                  </li>
                  <li className="sky">
                    <Link to="/help-center">
                      <span className="li-icon">
                        <FaChevronRight /> Help Center
                      </span>
                    </Link>
                  </li>
                  <li className="sky">
                    <Link to="/demo">
                      <span className="li-icon">
                        <FaChevronRight /> Request for demo
                      </span>
                    </Link>
                  </li>
                  <li className="sky">
                    <Link to="/website-performance-audit">
                      <span className="li-icon">
                        <FaChevronRight /> Website performance audit
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <ScrollUp />
        <div className="footer-bottom">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <p>© copyright 2024 | All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterFour;
