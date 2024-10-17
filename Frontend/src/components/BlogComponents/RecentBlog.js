import React, { useState, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { fetchBlogs, formatDate } from "../../service/BlogService/BlogsService";
const BASE_IMAGE_URL = process.env.REACT_APP_BASE_URL;

const BlogAreaFive = ({ searchQuery, selectedCategory }) => {
  const [blogs, setBlogs] = useState([]);

  const getExcerpt = (text, wordCount) => {
    const words = text.split(" ");
    return words.length > wordCount
      ? words.slice(0, wordCount).join(" ") + "..."
      : text;
  };

  const getBlogs = async () => {
    try {
      const blogsData = await fetchBlogs();

      setBlogs(blogsData);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  useEffect(() => {
    getBlogs();
  }, []);

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearchQuery = searchQuery
      ? blog.blogTopic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.blogDescription.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    const matchesCategory =
      selectedCategory === "AllCategories" ||
      blog.blogCategory === selectedCategory;

    // Blog passes if it matches either search or category or both
    return matchesSearchQuery && matchesCategory;
  });

  return (
    <>
      {/*===================== Blog Area Three start =====================*/}
      <div className="blog-area pd-top-120 pd-bottom-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title">
                <h2 className="heading text-center">
                  Discover a World of Sustainable Alternatives
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <div key={blog._id} className="col-lg-4 col-md-6">
                  <div className="single-blog-list style-3">
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
                        <li className="blog-topic-author">
                          {blog.publishedBy || "Admin"}
                        </li>
                        <li className="blog-topic-date">
                          <FaCalendarAlt /> {formatDate(blog.createdAt)}
                        </li>
                      </ul>
                      <h5 className="mb-3">
                        <Link to={`/blog-details/${blog._id}`}>
                          {getExcerpt(blog.blogTopic || "No Title", 14)}
                        </Link>
                      </h5>

                      <p
                        dangerouslySetInnerHTML={{
                          __html: getExcerpt(
                            blog.blogDescription || "No description available.",
                            15
                          ),
                        }}
                      />
                      <div className="text-end pe-2">
                        <Link
                          className="read-more-text"
                          to={`/blog-details/${blog._id}`}
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center">
                <p>No blogs available.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogAreaFive;
