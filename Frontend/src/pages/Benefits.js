
import React from "react";
import Breadcrumb from "../components/commonComp/Breadcrumb";
import Footer from "../components/commonComp/Footer";
import Header from "../components/commonComp/Header";
import CreativeServices from "../components/FeaturesComp/CreativeServices";

const Benefits = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Header />

      {/* Navigation Bar */}
      <Breadcrumb title={"Benefits"} />

      <CreativeServices />

      {/* Footer One */}
      <Footer />
    </>
  );
};

export default Benefits;
