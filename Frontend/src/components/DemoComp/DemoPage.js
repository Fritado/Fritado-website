import React from "react";
import DemoForm from "./DemoForm";

const DemoPage = () => {
  return (
    <div className="head-div">
      <div className="container demo-container " >
        {/* section1 */}
        <div className="d-flex flex-col" style={{maxWidth:"50%"}}>
          <div className="d-flex flex-col">
            <h1 className="demo-heading widget-title">Key Features of Fritado's SEO Automation Platform.</h1>
            <p className="demo-para">
              The heart of Fritado's offerings lies in its AI-driven SEO
              automation platform, a revolutionary tool that automates SEO
              processes, allowing businesses to focus more on their core
              functions while still maintaining a strong online presence. Here’s
              an overview of the platform's key features:
            </p>
          </div>
         
            <div className="d-flex flex-col flex-wrap my-3 ms-4 align-items-start demo-list-items">
              <ul className="my-1 demo-list">
              <li className="demo-para demo-list"> Keyword Research Automation</li>
                <li className="demo-para demo-list">Blog Automation</li>
                <li className="demo-para demo-list">
                  On-Site SEO Optimization
                </li>
                <li className="demo-para demo-list">
                  Social Media Auto-Posting
                </li>
                <li className="demo-para demo-list">Comprehensive Dashboard</li>
                <li className="demo-para demo-list">
                  Data-Driven Insights and Analytics
                </li>
                <li className="demo-para demo-list">24/7 Dedicated Support</li>
              </ul>
            </div>
          </div>
        

        <DemoForm />
      </div>
    </div>
  );
};

export default DemoPage;
