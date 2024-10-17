import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaRegUser } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import {
  fetchBlogById,
  fetchBlogs,
  formatDate,
} from "../../service/BlogService/BlogsService";
import WebsiteAuditBanner from "../PageSpeedAudits/WebsiteAuditBanner";
const BASE_IMAGE_URL = process.env.REACT_APP_BASE_URL;

const BlogDetailsArea = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [recentBlog, setRecentBlog] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const getExcerpt = (text, wordCount) => {
    const words = text.split(" ");
    return words.length > wordCount
      ? words.slice(0, wordCount).join(" ") + "..."
      : text;
  };

  const getBlogDetails = async () => {
    try {
      const blogData = await fetchBlogById(id);
      setBlog(blogData);
      const recentBlogTopic = await fetchBlogs();
      setRecentBlog(recentBlogTopic);
    } catch (error) {
      console.error("Error fetching blog details:", error);
    }
  };

  useEffect(() => {
    getBlogDetails();
  }, [id]);

 

  const visibleBlogs = recentBlog.slice(currentIndex, currentIndex + 3);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ?   recentBlog.length - 3 : prevIndex - 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ?  recentBlog.length - 3 : prevIndex - 1
    );
  };

  if (!blog) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {/* ==================== Blog Details Area start ====================*/}
      <div className="blog-area pd-top-120">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10">
              <div className="blog-details-page-content">
                <h2 className="heading text-center">{blog.blogTopic}</h2>
                <div className="single-blog-inner bg-white">
                  <div className="thumb">
                    <img
                      src={`${BASE_IMAGE_URL}/${blog.uploadImage.replace(
                        "\\",
                        "/"
                      )}`}
                      alt={blog.blogTopic}
                    />
                  </div>
                  <div className="details">
                    <ul className="blog-meta">
                      <li>
                        <FaRegUser /> {blog.publishedBy || "Admin"}
                      </li>
                      <li>
                        <FaCalendarAlt />{" "}
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </li>
                    </ul>
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          blog.blogDescription || "No description available.",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex flex-row justify-content-center">
              <div className="td-sidebar">
                <div className="widget widget-recent-post">
                  <h3 className="widget-title">Recent Blog</h3>
                  <div className="carousel">
                    <ul className="carousel-inner">
                      {visibleBlogs.length > 0 ? (
                        visibleBlogs.map((recent) => (
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
                                    {getExcerpt(
                                      recent.blogTopic || "No Title",
                                      10
                                    )}
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

                    {/* Carousel Navigation Tabs */}

                    <div className="carousel-tab  d-flex justify-content-center gap-3 mt-3">
                      <button
                        className="carousel-tab prev-tab"
                        onClick={handlePrev}
                      ></button>
                      {/* <button className="carousel-tab next-tab" onClick={ handleNext}>
                       
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <WebsiteAuditBanner />
        </div>
      </div>
    </>
  );
};

export default BlogDetailsArea;
