import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import {
  fetchLatestBlogs,
  formatDate,
} from "../../service/BlogService/BlogsService";
const BASE_IMAGE_URL = process.env.REACT_APP_BASE_URL;

const LatestBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  const getExcerpt = (text, wordCount) => {
    const words = text.split(" ");
    return words.length > wordCount
      ? words.slice(0, wordCount).join(" ") + "..."
      : text;
  };

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
    <section className="head-div">
      <div className="d-flex flex-column justify-content-center align-items-center text-center title-content">
        <h2 className="heading">Latest Blogs</h2>
        <div className="title-para">
          <p>
            Trusted by thousands of rapidly growing organizations worldwide.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="d-flex flex-row justify-content-center">
          <div className="td-sidebar">
            <div className="widget widget-recent-post">
              <div className="carousel">
                <ul className="carousel-inner">
                  {blogs.length > 0 ? (
                    blogs.map((recent) => (
                      <li key={recent._id} className="recent-blog-card">
                        <div className="media">
                          <div className="media-left">
                            <img
                              src={`${BASE_IMAGE_URL}/${recent.uploadImage.replace(
                                "\\",
                                "/"
                              )}`}
                              alt={recent.blogTopic}
                            />
                          </div>
                          <div className="media-body align-self-center">
                            <h6 className="mb-1">
                              <Link to={`/blog-details/${recent._id}`}>
                                {getExcerpt(recent.blogTopic || "No Title", 10)}
                              </Link>
                            </h6>
                            <div className="d-flex flex-row gap-2">
                              <span className="mt-1">
                                <FaCalendarAlt />
                              </span>
                              <p>{formatDate(recent.createdAt)}</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))
                  ) : (
                    <p>No recent blogs available.</p>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
