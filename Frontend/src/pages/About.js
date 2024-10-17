import React from "react";
import AboutUS from "../components/AboutComp/AboutUS";
import Breadcrumb from "../components/commonComp/Breadcrumb";
import Counter from "../components/AboutComp/Counter";
import Faq from "../components/AboutComp/Faq";
import Footer from "../components/commonComp/Footer";
import Header from "../components/commonComp/Header";
//import RecentBlog from "../components/commonComp/RecentBlog";

const About = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <Header />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Breadcrumb
          title={
            "Transforming SEO with AI"
          }
          para={
            "Fritado AI transforms your SEO strategy with automation, boosting brand visibility and online revenue."
          }
        />
      </div>
      <AboutUS />
      {/* About Area One */}

      {/* FAQ Area One */}
      <Faq />

      {/* Counter Area One */}
      {/* <Counter /> */}

      {/*Blog Area */}
      {/*<RecentBlog />*/}

      {/* Footer One */}
      <Footer />
    </div>
  );
};

export default About;
