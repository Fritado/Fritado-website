import React from "react";
import ShowHide from "./ShowHide";

const FaqAreaOne = () => {

    const data = [
      {
        heading: "Innovation",
        para: "Continuously pushing boundaries to stay ahead in the SEO landscape.",
      },
      {
        heading: "Boldness",
        para: " Taking daring steps to implement and advocate for the most advanced SEO strategies.",
      },
      {
        heading: "Transparency",
        para: "Maintaining clear communication and honesty in every interaction.",
      },
      {
        heading: "Passion",
        para: "Driven by a deep love for what we do, striving to exceed expectations in every project.",
      },
    ];
  
  return (
    <>
      {/*==================== Faq area start ====================*/}
      <div
        className="faq-area faq-area-margin-top pd-top-90 pd-bottom-90"
        
      >
        <div className="container">
          <div className="row pd-top-120">
            <div
              className="col-xl-5 col-lg-6 col-md-8 order-lg-last"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="about-thumb-inner pt-lg-3">
                <img
                  className="main-img"
                  src="assets/img/about/4.jpg"
                  alt="img"
                />
              </div>
            </div>
            <div
              className="col-xl-7 col-lg-6"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="section-title mb-0 mt-4 mt-lg-0">
                
                <h2 className="heading">
                 Fundamental Principles that Drive Us.
                </h2>
                <p className="content title-para">
                Our operation is guided by core values that ensure we deliver the best service to our clients:
                </p>
              </div>
             <div>
              {
                data.map(item=>(
                  <ShowHide 
                  key={item.id}
                  heading={item.heading}
                  para={item.para} />
                ))
              }
             </div>
              
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Faq area end ====================*/}
    </>
  );
};

export default FaqAreaOne;
