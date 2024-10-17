import React, { useState } from "react";
import SolutionCard from "./SolutionCard";
import { Link } from "react-router-dom";

const SolutionSecrtion = ({ data, flexDirection }) => {
  const [showKeyPoints, setShowKeyPoints] = useState(false);

  const handleViewMore = () => {
    setShowKeyPoints(!showKeyPoints);
  };
  const marginStyle =
    flexDirection === "row" ? { marginRight: "4rem" } : { marginLeft: "4rem"};
  return (
    <section className="top-section head-div solution-section">
      <div className="main-div container" style={{ flexDirection }}>
        <div
          className="animate-div d-flex align-items-center "
          style={{ flexDirection }}
        >
          <img
            src={data.image}
            alt={data.heading}
            className="image-container"
            style={marginStyle}
          
          />

          <div className="content-container text-left title-content">
            <h2 className="heading">{data.heading}</h2>
            <p>{data.description}</p>
            <div className="view-more-btn d-flex flex-row">
              <span
                onClick={handleViewMore}
                className="btn-tab view-more-less"
              >
                {showKeyPoints ? "View Less" : "View More"}
              </span>
                <span className="btn-tab btn-base-color solution-register">
              <Link to="https://platform.fritado.com/" target="_" className="solution-btn">
                  Register now
              </Link>
                  </span>
            </div>
          </div>
        </div>
      </div>

      <SolutionCard points={data.points} showKeyPoints={showKeyPoints} />
    </section>
  );
};

export default SolutionSecrtion;
