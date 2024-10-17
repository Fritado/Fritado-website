import React from "react";
import { Link } from "react-router-dom";

const WebsiteAuditBanner = () => {
  return (
    <div className="my-4">
      <div className="flex flex-col align-items-center justify-content-center mx-auto my-4">
        <div>
          <h1 className="fw-bold text-center fs-4 my-2 py-2">
            Interested in boosting your website's performance?
          </h1>
          <p className="">
            Leverage the full capabilities of Fritado AI to maximize your site's
            speed and performance!
          </p>
        </div>
        <span className="btn-tab btn-base-color my-4">
          <Link to="https://platform.fritado.com/" target="_">
            Register now
          </Link>
        </span>
        <p className="audit-description">
          If you have any questions, don't hesitate to reach out to our{" "}
          <span style={{ textDecoration: "none", color: "#06f" }}>
            <Link to="https://fritado.com/support"> support team.</Link>{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default WebsiteAuditBanner;
