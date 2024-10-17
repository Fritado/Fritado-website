import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchGuides } from "../../service/GuideService/GuideService";
const BASE_IMAGE_URL = process.env.REACT_APP_BASE_URL;

const GuideList = ({ searchQuery, selectedCategory }) => {
  const [guide, setGuide] = useState([]);
  const getExcerpt = (text, wordCount) => {
    const words = text.split(" ");
    return words.length > wordCount
      ? words.slice(0, wordCount).join(" ") + "..."
      : text;
  };
  const getGuides = async () => {
    try {
      const guidesata = await fetchGuides();
    
      setGuide(guidesata);
    } catch (error) {
      console.error("Error fetching guide:", error);
    }
  };
  useEffect(() => {
    getGuides();
  }, []);

  const filteredGuides = guide.filter((guide) => {
    const matchesSearchQuery = searchQuery
      ? guide.guideTopic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.guideDescription.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    const matchesCategory =
      selectedCategory === "AllCategories" ||
      guide.guideCategory === selectedCategory;

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
            {filteredGuides.length > 0 ? (
              filteredGuides.map((guide) => (
                <div key={guide._id} className="col-lg-4 col-md-6">
                  <div className="single-blog-list style-3">
                    <div className="thumb">
                      <img
                        src={`${BASE_IMAGE_URL}/${guide.guideImage.replace(
                          /\\/g,
                          "/"
                        )}`}
                        alt={guide.guideTopic}
                      />
                    </div>
                    <div className="details">
                      <h3 className="mb-3">
                        <Link to={`/guide-details/${guide._id}`}>
                          {getExcerpt(guide.guideTopic || "No Title", 14)}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center">
                <p>No Guide available.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GuideList;
