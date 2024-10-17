import React from "react";
import { contentPoints } from "./ResearchDevData";
import ResearchDevCard from "./ResearchDevCard";
import researchdevImage from "../Assets/ResearchDev/future-of-artificial-intelligence.png";
import ResearchDevFAQ from "./ResearchDevFAQ";

const ResearchDev = () => {
  return (
    <div>
      <section className="head-div">
        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center text-center title-content">
            <h2 className="heading">Fritado R&D Center</h2>
            <div className="title-para">
              <p>
                In the rapidly evolving technological landscape, the demand for
                innovative and efficient solutions has never been higher.
                Fritado R&D Center stands at the forefront of this revolution,
                offering cutting-edge real-time AI-based project development
                services in Bangalore. Our mission is to empower businesses by
                leveraging the transformative power of artificial intelligence
                to solve complex problems, streamline operations, and drive
                sustainable growth
              </p>
            </div>
          </div>
          <div className="RandDimage">
            <img
              src={researchdevImage}
              alt="Research Development"
              className="inner-image"
            />
          </div>
        </div>
      </section>
      {/**core service section */}
      <section className="head-div">
        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center text-center title-content">
            <h2 className="heading">Core services</h2>
            <div className="title-para">
              <p>Rapidly evolving technological landscape, the demand for</p>
            </div>
          </div>
          <div className="card-container">
            {contentPoints.map((point, index) => (
              <ResearchDevCard
                key={index}
                title={point.title}
                description={point.description}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="head-div">
        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center text-center title-content">
            <h2 className="heading">Why Choose Fritado R&D Center?</h2>
            <div className="title-para">
              <p>Rapidly evolving technological landscape, the demand for</p>
            </div>
          </div>
          <div>
            <ResearchDevFAQ />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchDev;
