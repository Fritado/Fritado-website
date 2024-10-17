import React, { useState, useEffect } from "react";
import {
  FaChevronRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegCalendarAlt,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ScrollUp from "./ScrollUp";
import { fetchLatestBlogs } from "../../service/BlogService/BlogsService";
const BASE_IMAGE_URL = process.env.REACT_APP_BASE_URL;


const FooterFour = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await fetchLatestBlogs();
        setBlogs(data.data);
      } catch (err) {
        setError("Failed to fetch blogs");
        console.error("Error loading blogs:", err);
      }
    };

    loadBlogs();
  }, []);
  return (
    <>
      {/* ================== Footer Four Start ==================*/}
      <footer className="footer-area bg-cover mt-20 pd-top-100">
        <div className="footer-subscribe"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="my-3">
                <img
                  src={"/assets/img/logo-white.png"}
                  style={{ width: "180px" }}
                />
              </div>
              <div className="widget widget-recent-post">
                <div className="widget widget_contact">
                  <ul className="details">
                    <li className="d-flex position-relative">
                      <FaMapMarkerAlt size={35} className="sky" />
                      No. 8, CMH Road, 2nd Stage, Indiranagar, Bengaluru,
                      Karnataka - 560 038
                    </li>
                    <li className="mt-3 d-flex position-relative">
                      <FaPhoneAlt className="sky" /> +(91)-974-1156-389
                    </li>
                    <li className="mt-2 d-flex position-relative">
                      <FaEnvelope className="sky" /> support@fritado.com
                    </li>
                  </ul>
                  <ul className="social-media mt-4">
                    <li>
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
            <div className="col-lg-3 col-md-6 mb-4 ps-xl-5">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Our Service</h4>
                <ul className="">
                  <li className="sky ">
                    <Link to="/">
                      <span className="d-flex">
                        <FaChevronRight /> Home
                      </span>
                    </Link>
                  </li>
                  <li className="sky">
                    <Link to="/about">
                      <span className="d-flex">
                        <FaChevronRight /> About
                      </span>
                    </Link>
                  </li>
                  <li className="sky">
                    <Link to="/solutions">
                      <span className="d-flex">
                        <FaChevronRight />
                        Solutions
                      </span>
                    </Link>
                  </li>
                  <li className="sky">
                    <Link to="/pricing">
                      <span className="d-flex">
                        <FaChevronRight />
                        Pricing
                      </span>
                    </Link>
                  </li>

                  <li className="sky">
                    <Link to="/Research-and-development">
                      <span className="d-flex">
                        <FaChevronRight />
                        R&D Center
                      </span>
                    </Link>
                  </li>
                  <li className="sky">
                    <Link to="/website-performance-audit">
                      <span className="d-flex">
                        <FaChevronRight /> Website performance audit
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 ps-xl-5 mb-4">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Resources</h4>
                <ul>
                  <li className="sky">
                    <Link to="/blog">
                      <span className="d-flex">
                        <FaChevronRight /> Blog
                      </span>
                    </Link>
                  </li>
                  <li className="sky">
                    <Link to="/guide">
                      <span className="d-flex">
                        <FaChevronRight /> Guide
                      </span>
                    </Link>
                  </li>
                  <li className="sky">
                    <Link to="/demo">
                      <span className="d-flex">
                        <FaChevronRight />
                        Request for demo
                      </span>
                    </Link>
                  </li>
                  <li className="sky">
                    <Link to="/support">
                      <span className="d-flex">
                        <FaChevronRight /> Contact Us
                      </span>
                    </Link>
                  </li>
                  <li className="sky">
                    <Link to="/terms-and-condition">
                      <span className="d-flex">
                        {" "}
                        <FaChevronRight /> Terms & Conditions
                      </span>
                    </Link>
                  </li>
                  <li className="sky">
                    <Link to="/privacy-policy">
                      <span className="d-flex">
                        {" "}
                        <FaChevronRight /> Privacy Policy
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="widget widget-recent-post">
                <h4 className="widget-title">Recent Blog</h4>
                <ul>
                  {blogs.length > 0 ? (
                    blogs.map((blog) => (
                      <li className="sky" key={blog._id}>
                        <Link to={`/blog-details/${blog._id}`}> 
                        <div className="media">
                          <img
                            src={`${BASE_IMAGE_URL}/${blog.uploadImage.replace(
                              "\\",
                              "/"
                            )}`}
                            alt={blog.blogTopic}
                            style={{
                              width: "50px",
                              height: "50px",
                              marginRight: "10px",
                            }}
                          />
                          <div className="media-body align-self-center">
                            <div className="post-info mb-2">
                              <FaRegCalendarAlt className="sky" />
                              <span>
                                {new Date(blog.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                            <h6 className="title-footer sky mb-0">
                              <Link to={`/blog/${blog._id}`}>
                                {blog.blogTopic}
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </Link>
                      </li>
                    ))
                  ) : (
                    <li>No recent blogs available</li>
                  )}
                </ul>
              </div>
            </div>

          </div>
        </div>
        <ScrollUp />
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <p>© copyright 2024 | All Rights Reserved</p>
              </div>
              <div className="col-md-6 text-lg-end"></div>
            </div>
          </div>
        </div>
      </footer>

      {/* ================== Footer Two  end ==================*/}
    </>
  );
};

export default FooterFour;
