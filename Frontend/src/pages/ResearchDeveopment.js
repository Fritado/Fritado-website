import React from "react";
import Breadcrumb from "../components/commonComp/Breadcrumb";
import Header from "../components/commonComp/Header";
import Footer from "../components/commonComp/Footer";
import ResearchDev from "../components/ResearchDevelopment/ResearchDev";

const ResearchDeveopment = () => {
  return (
    <div>
      <Header />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Breadcrumb
          title={
            "Leading the Way in Real-Time AI Project Development in Bangalore"
          }
          para={"Fritado R&D Center."}
        />
       <ResearchDev />
      </div>
      <Footer />
    </div>
  );
};

export default ResearchDeveopment;
