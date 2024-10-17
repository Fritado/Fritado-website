import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title, para }) => {
  return (
   
      <div className="breadcrumb-area">
        <div className="container breadcrumb-container">
          <div className="">
            <h1 className="page-title">{title}</h1>
          </div>
          <div className="title-para">
            <p>{para}</p>
          </div>
        </div>
      </div>
    
  );
};

export default Breadcrumb;
