import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function ScrollUp() {
  const gotToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
  <div className="scroll-up">   
    <div onClick={gotToTop} className="top-btn">
          <span className="scroll-up-icon">
            <FaArrowUpLong />
          </span>
    </div>
  </div>
  );
}

export default ScrollUp;