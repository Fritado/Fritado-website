import React, { useState } from "react";
import { researchDevFaq } from "./ResearchDevData";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ResearchDevFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDescription = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container-div">
      {researchDevFaq.map((faq, index) => (
        <div key={index} className="RandDFaq-container">
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onClick={() => toggleDescription(index)}
          >
            <h3 style={{ margin: 0 }}>{faq.title}</h3>
            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openIndex === index && (
            <p style={{ marginTop: "10px" }}>{faq.description}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ResearchDevFAQ;
