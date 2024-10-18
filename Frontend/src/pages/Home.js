import React from "react";
import HomeBanner from "../components/HomeComponents/HomeBanner";
import Footer from "../components/commonComp/Footer";
import Navbar from "../components/HomeComponents/Navbar";
import BestServices from "../components/HomeComponents/BestServices";
import Clients from "../components/HomeComponents/Clients";
import Partner from "../components/HomeComponents/Partner";
import ResearchDevFAQ from "../components/ResearchDevelopment/ResearchDevFAQ";
import Testimonial from "../components/HomeComponents/Testimonial";
import LatestBlog from "../components/HomeComponents/LatestBlog";

const HomeFive = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Banner Five */}
      <HomeBanner />

      {/*Partner logo */}
      <Partner />

      {/* Service Area Five */}
      <BestServices />

      {/* FAQ */}
      <section>
        <div className="container ">
          <div className="d-flex flex-column justify-content-center align-items-center text-center head-div">
            <h2 className="heading">Why Choose Fritado AI?</h2>
            <div className="title-para">
              <p>
                Fritado AI automates your SEO, boosting brand visibility and
                online revenue.
              </p>
            </div>
          </div>
          <div>
            <ResearchDevFAQ />
          </div>
        </div>
      </section>

      <Testimonial />
      {/* clients */}
      <LatestBlog />

      <Clients />

      {/* Footer Four */}
      <Footer />
    </>
  );
};

export default HomeFive;
