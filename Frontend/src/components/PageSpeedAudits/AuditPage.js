import React, { useState, useEffect } from "react";
import { BiMobile } from "react-icons/bi";
import PageSpeedCardMobile from "./PageSpeedCardMobile";
import PageSpeedCardDesktop from "./PageSpeedCardDesktop";
import { LuLaptop2 } from "react-icons/lu";
import { fetchPageSpeedData } from "../../service/pagespeed";
import Spinner from "../commonComp/Spinner";

const AuditPage = () => {
  const [activeTab, setActiveTab] = useState("mobile");
  const [urlInput, setUrlInput] = useState("");
  const [mobileData, setMobileData] = useState(null);
  const [desktopData, setDesktopData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dataFetched, setDataFetched] = useState(false);
  
  const PageSpeedApiKey = "AIzaSyCHCEQO7ge4Rs6ABVtlcOWiejNFp5T9LWI";

  const handleOnChange = (e) => {
    const inputPrefix = e.target.value.trim(); // fritado.com
    setUrlInput(
      inputPrefix.startsWith("https://") ? inputPrefix.slice(8) : inputPrefix
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const modifiedUrlInput = `https://${urlInput}`;
    
    try {
      const mobileData = await fetchPageSpeedData(
        modifiedUrlInput,
        PageSpeedApiKey,
        "mobile"
      );
      
      console.log(mobileData, "mobileData ");
      const desktopData = await fetchPageSpeedData(
        modifiedUrlInput,
        PageSpeedApiKey,
        "desktop"
      );
      setMobileData(mobileData);
      setDesktopData(desktopData);
      setDataFetched(true);
      setError(null);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      setDataFetched(false);
      console.error("Error fetching PageSpeed data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="flex">
        <form
          onSubmit={handleSubmit}
          className="flex flex-row justify-content-center items-center mx-auto container my-3"
        >
          
            <span className="fs-6 border rounded px-2 py-2">https://</span>
            <input
              type="text"
              name="urlInput"
              value={urlInput}
              onChange={handleOnChange}
              placeholder="Enter website URL eg. example.com"
              className="px-2 py-2"
            />
          
          <button
            type="submit"
            className="rounded border py-2"
            style={{ width: "15%", color: "white", backgroundColor: "#4c94af" }}
          >
            Analyze
          </button>
        </form>
      </div>
      {loading && (
        <div className="flex flex-row gap-4 mx-auto justify-content-center items-center">
          <Spinner /> <p className="">Analyzing...</p>
        </div>
      )}
      {error && <p className="text-danger text-center">{error}</p>}
      {dataFetched && ( // Conditionally render based on dataFetched
        <>
          <div className="flex items-center justify-content-center mx-auto gap-2">
            <h6
              onClick={() => setActiveTab("mobile")}
              className={`tab-button ${
                activeTab === "mobile" ? "active" : "inactive"
              }`}
            >
              <span>
                <BiMobile size={24} />
              </span>
              Mobile
            </h6>
            <h6
              onClick={() => setActiveTab("desktop")}
              className={`tab-button ${
                activeTab === "desktop" ? "active" : "inactive"
              }`}
            >
              <span>
                <LuLaptop2 size={24} />
              </span>
              Desktop
            </h6>
          </div>
          <div className="flex justify-content-center align-items-center  py-2">
            {activeTab === "mobile" && (
              <div className="centered-card">
                <PageSpeedCardMobile mobileData={mobileData} />
              </div>
            )}
            {activeTab === "desktop" && (
              <div className="centered-card">
                <PageSpeedCardDesktop desktopData={desktopData} />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AuditPage;
