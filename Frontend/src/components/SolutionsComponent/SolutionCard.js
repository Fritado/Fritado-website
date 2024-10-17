import React from "react";
import PropTypes from "prop-types";

const SolutionCard = ({ points, showKeyPoints }) => {
  return (
    <div className="">
      {showKeyPoints && (
        <div className="solution-cards-container">
          {points.map((point, index) => (
            <div key={index} className="solution-card">
              <h6>{point.title}</h6>
              <div>{point.description}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
SolutionCard.propTypes = {
  points: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  showKeyPoints: PropTypes.bool.isRequired,
};
export default SolutionCard;
