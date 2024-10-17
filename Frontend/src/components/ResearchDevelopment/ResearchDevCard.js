import React from "react";

const ResearchDevCard = ({ title, description }) => {
  return (
    <div className="card">
      <div>
        <h6 className="rd-card-title">{title}</h6>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ResearchDevCard;
