import React from "react";
import {
  RiCalendar2Line,
  RiTimerLine,
  RiWifiOffFill,
  RiLoaderLine,
} from "react-icons/ri";
import { PiDesktopTowerBold, PiGoogleChromeLogoBold } from "react-icons/pi";
import GaugeCircle from "./GaugeCircle";

const getBulletClass = (score) => {
  if (score >= 0.9) return "bullet-circle"; // Green
  if (score >= 0.5) return "bullet-square"; // Yellow
  if (score < 0.5) return "bullet-triangle"; // Red
  return "bullet-hollow-circle"; // Informational
};

const AuditView = ({ pageSpeedData }) => {
  const audits = pageSpeedData?.lighthouseResult?.audits || {};
  const time = pageSpeedData?.lighthouseResult?.fetchTime;
  const imageUrl =
    pageSpeedData?.lighthouseResult.fullPageScreenshot.screenshot.data;

  const inputTime = new Date(time);
  const formattedTime = inputTime.toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="my-4">
      <div className="row mb-4">
        {/** Progress Section */}
        <div className="col-md-6 flex flex-col align-items-center">
          <div className="gauge-circle-container flex  flex-col mx-auto justify-content-center align-items-center">
            <GaugeCircle
              score={
                pageSpeedData.lighthouseResult.categories.performance.score || 0
              }
            />
            <h4 className="my-3">
              {pageSpeedData.lighthouseResult.categories.performance.title}
            </h4>
          </div>
          {/* <h3 className="text-center">Performance</h3> */}
          <p className="text-center text-muted audit-description">
            Values are estimated and may vary.
          </p>
          <p className="text-primary audit-description fst-italic">
            The performance score is calculated directly from these metrics.
          </p>

          <p className="text-primary audit-description"> See calculator.</p>
          <div className="flex justify-content-center mx-auto gap-5 w-75 mt-3">
            <div className="bullet-container">
              <span className="bullet-triangle"></span> 0-49
            </div>
            <div className="bullet-container">
              <span className="bullet-square"></span> 50-89
            </div>

            <div className="bullet-container">
              <span className="bullet-circle"></span> 90-100
            </div>
          </div>
        </div>

        <div className="col-md-6 flex justify-content-center align-items-center">
          <img
            src={imageUrl}
            alt="Performance Screenshot"
            className="img-fluid page-img border rounded"
          />
        </div>
      </div>

      {/** Metrics Section */}
      <div className="metrics-section">
        <h4 className="pb-3 ms-2 fw-bold">METRICS</h4>
        <div className="border rounded px-3 ">
          {/** Metric Rows */}
          <div className="row border-bottom mb-2 pb-2">
            <div className="col-md-6">
              <div className="metric-item">
                <div>
                  <span
                    className={`bullet ${getBulletClass(
                      audits["first-contentful-paint"]?.score
                    )}`}
                  ></span>
                  <span className="metric-title ">
                    {audits["first-contentful-paint"]?.title}
                  </span>
                </div>
                <div>
                  <h4 className="metric-value ms-4">
                    {audits["first-contentful-paint"]?.displayValue}
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="metric-item">
                <div>
                  <span
                    className={`bullet ${getBulletClass(
                      audits["largest-contentful-paint"]?.score
                    )}`}
                  ></span>
                  <span className="metric-title ">
                    {audits["largest-contentful-paint"]?.title}
                  </span>
                </div>
                <div>
                  <h4 className="metric-value ms-4">
                    {audits["largest-contentful-paint"]?.displayValue}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="row border-bottom mb-2 pb-2">
            <div className="col-md-6">
              <div className="metric-item">
                <div>
                  <span
                    className={`bullet ${getBulletClass(
                      audits["total-blocking-time"]?.score
                    )}`}
                  ></span>
                  <span className="metric-title ">
                    {audits["total-blocking-time"]?.title}
                  </span>
                </div>
                <div>
                  <h4 className="metric-value ms-4">
                    {audits["total-blocking-time"]?.displayValue}
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="metric-item">
                <div>
                  <span
                    className={`bullet ${getBulletClass(
                      audits["cumulative-layout-shift"]?.score
                    )}`}
                  ></span>
                  <span className="metric-title ">
                    {audits["cumulative-layout-shift"]?.title}
                  </span>
                </div>
                <div>
                  <h4 className="metric-value ms-4">
                    {audits["cumulative-layout-shift"]?.displayValue}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="row border-bottom ">
            <div className="col-md-12">
              <div className="metric-item">
                <div>
                  <span
                    className={`bullet ${getBulletClass(
                      audits["speed-index"]?.score
                    )}`}
                  ></span>
                  <span className="metric-title">
                    {audits["speed-index"]?.title}
                  </span>
                </div>
                <div>
                  <h4 className="metric-value ms-4">
                    {audits["speed-index"]?.displayValue}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/** Footer Section */}
          <div
            className="flex flex-row gap-10 my-3 px-2 py-2 audit-description"
            style={{ backgroundColor: "#004a6512", borderRadius: "6px" }}
          >
            <div className="">
              <p className="flex flex-row align-items-center gap-2">
                <RiCalendar2Line size={15} /> Captured at {formattedTime}
              </p>
              <p className="flex flex-row align-items-center gap-2">
                <RiTimerLine size={15} /> Initial page load
              </p>
            </div>
            <div className="">
              <p className="flex flex-row align-items-center gap-2">
                <PiDesktopTowerBold size={15} /> Emulated Moto G Power with
                Lighthouse 12.0.0
              </p>
              <p className="flex flex-row align-items-center gap-2">
                <RiWifiOffFill size={15} /> Custom throttling
              </p>
            </div>
            <div className="">
              <p className="flex flex-row align-items-center gap-2">
                <RiLoaderLine size={15} /> Single page session
              </p>
              <p className="flex flex-row align-items-center gap-2">
                <PiGoogleChromeLogoBold size={15} /> Using HeadlessChromium
                127.0.6533.119 with lr
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditView;
