import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaRegUser } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { formatDate } from "../../service/BlogService/BlogsService";
import {
  fetchGuideById,
  fetchGuides,
} from "../../service/GuideService/GuideService";
import WebsiteAuditBanner from "../PageSpeedAudits/WebsiteAuditBanner";
const BASE_IMAGE_URL = process.env.REACT_APP_BASE_URL;

const GuideDetailsArea = () => {
  const { id } = useParams();
  const [guide, setGuide] = useState(null);
  const [recentGuide, setRecentGuide] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getExcerpt = (text, wordCount) => {
    const words = text.split(" ");
    return words.length > wordCount
      ? words.slice(0, wordCount).join(" ") + "..."
      : text;
  };

  const getGuideDetails = async () => {
    try {
      const guideData = await fetchGuideById(id);

      setGuide(guideData.data);
      const recentGuideTopic = await fetchGuides();
      setRecentGuide(recentGuideTopic);
    } catch (error) {
      console.error("Error fetching guide details:", error);
    }
  };

  useEffect(() => {
    getGuideDetails();
  }, [id]);

  const handleTabClick = (index) => {
    setCurrentIndex(index);
  };

 
  const visibleGuides =  recentGuide.slice(currentIndex, currentIndex + 3);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= recentGuide.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ?  recentGuide.length - 3 : prevIndex - 1
    );
  };
  if (!guide) {
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
                <h2 className="heading text-center">{guide.guideTopic}</h2>
                <div className="single-blog-inner bg-white">
                  <div className="thumb">
                    {guide.guideVideo ? (
                      <iframe
                        width="100%"
                        height="300"
                        src={guide.guideVideo.replace("watch?v=", "embed/")}
                        title={guide.guideTopic}
                        frameBorder="0"
                        className="guide-iframe"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      />
                    ) : (
                      <p>No video available</p> // Fallback if no video is available
                    )}
                  </div>
                  <div className="details">
                    <ul className="blog-meta">
                      <li>
                        <FaRegUser /> {guide.publishedBy || "Admin"}
                      </li>
                      <li>
                        <FaCalendarAlt />{" "}
                        {new Date(guide.createdAt).toLocaleDateString()}
                      </li>
                    </ul>
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          guide.guideDescription || "No description available.",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex flex-row justify-content-center">
              <div className="td-sidebar">
                <div className="widget widget-recent-post">
                  <h3 className="widget-title">Recent Guide</h3>
                  <div className="carousel">
                    <ul className="carousel-inner">
                      {visibleGuides.length > 0 ? (
                        visibleGuides.map((recent) => (
                          <li key={recent._id} className="recent-blog-card">
                            <div className="media">
                              <div className="media-left">
                                <img
                                  src={`${BASE_IMAGE_URL}/${recent.guideImage.replace(
                                    /\\/g,
                                    "/"
                                  )}`}
                                  alt={recent.guideTopic}
                                />
                              </div>
                              <div className="media-body align-self-center">
                                <h6 className="mb-1">
                                  <Link to={`/blog-details/${recent._id}`}>
                                    {getExcerpt(
                                      recent.guideTopic || "No Title",
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
                        <p>No recent Guide available.</p>
                      )}
                    </ul>

                    {/* Carousel Navigation Tabs */}
                   
                    <div className="carousel-tab">
                      <button
                        className="carousel-tab prev-tab"
                        onClick={handlePrev}
                      ></button>
                      {/* <button className="carousel-tab next-tab" onClick={handleNext}>
                       
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

export default GuideDetailsArea;
