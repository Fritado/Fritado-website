import React from "react";
import Breadcrumb from "../components/commonComp/Breadcrumb";
import Footer from "../components/commonComp/Footer";
import Header from "../components/commonComp/Header";
import SolutionPage from "../components/SolutionsComponent/SolutionPage";


const Solutions = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Header />

      {/* Navigation Bar */}
      <Breadcrumb
        title={"Automate Marketing, Supercharge Growth"}
        para={
          "Advanced SEO strategies to enhance your brand visibility and drive online revenue growth"
        }
      />
      <SolutionPage />
      
      {/* Footer One */}
      <Footer />
    </>
  );
};

export default Solutions;
