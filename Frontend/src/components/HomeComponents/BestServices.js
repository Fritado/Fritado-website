import React from "react";
import { Link } from "react-router-dom";
import Img4 from "../Assets/HomeAssets/Img4.png";

const ServiceAreaFive = () => {
  return (
    <>
      {/*=================== service area five start ===================*/}
      <div className="service-area  bg-relative head-div">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="d-flex flex-column justify-content-center align-items-center text-center head-div">
                <h2 className="heading">
                  Advanced SEO Strategies 
                </h2>
                <div className="title-para">
              <p>To Enhance Brand Visibility and Drive
              Online Revenue Growth</p>
            </div>
              </div>
            </div>
          </div>
          <div className="row custom-no-gutter">
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner-3 single-service-inner-3-left">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img
                      src="assets/img/service-icon/7.svg"
                      alt="img"
                      className="inner-image"
                    />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3 service-title">
                    <Link to="/service-details">Blog Automation</Link>
                  </h5>
                  <p className="mb-0">
                    Fritado AI will suggest and write daily articles to help you
                    outrank your competition on Google Search.
                  </p>
                </div>
              </div>
              <div className="single-service-inner-3 single-service-inner-3-left">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img
                      src="assets/img/service-icon/8.svg"
                      alt="img"
                      className="inner-image"
                    />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3  service-title">
                    <Link to="/service-details">
                      Auto Social Posting for Brand Visibility
                    </Link>
                  </h5>
                  <p className="mb-0">
                    Automatically post articles to Facebook, Instagram,
                    LinkedIn, Reddit, Medium, and more, enhancing your brand
                    visibility
                  </p>
                </div>
              </div>
              <div className="single-service-inner-3 single-service-inner-3-left mb-0">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img
                      src="assets/img/service-icon/9.svg"
                      alt="img"
                      className="inner-image"
                    />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3  service-title">
                    <Link to="/service-details">Onsite SEO Suggestions </Link>
                  </h5>
                  <p className="mb-0">
                    No need for paid SEO tools. Fritado AI will analyze your
                    website and provide key action items to help your site rank
                    for your most profitable keywords.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 bg-blue-right d-lg-inline-block d-none">
              <div className="service-thumb service-middle-section align-self-end">
                <img src={Img4} alt="img" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner-3 single-service-inner-3-right">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img
                      src="assets/img/service-icon/10.svg"
                      alt="img"
                      className="inner-image"
                    />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3  service-title">
                    <Link to="/service-details">Grow Your Website Traffic</Link>
                  </h5>
                  <p className="mb-0">
                    Optimize your website for traffic and ranking on autopilot,
                    driving increased website traffic effortlessly.
                  </p>
                </div>
              </div>
              <div className="single-service-inner-3 single-service-inner-3-right">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img
                      src="assets/img/service-icon/11.svg"
                      alt="img"
                      className="inner-image"
                    />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3  service-title">
                    <Link to="/service-details">
                      Integrate with 2000+ Applications
                    </Link>
                  </h5>
                  <p className="mb-0">
                    Easily and seamlessly integrate with over 2000 applications
                    such as Hubspot, Zoho, and more for comprehensive
                    connectivity.
                  </p>
                </div>
              </div>
              <div className="single-service-inner-3 single-service-inner-3-right mb-0">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img
                      src="assets/img/service-icon/12.svg"
                      alt="img"
                      className="inner-image"
                    />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3  service-title">
                    <Link to="/service-details">
                      Unified Analytics Dashboard
                    </Link>
                  </h5>
                  <p className="mb-0">
                    View all key metrics like Google Analytics (GA) and Google
                    Search Console (GSC) in one unified platform with our
                    Unified Analytics Dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaFive;
