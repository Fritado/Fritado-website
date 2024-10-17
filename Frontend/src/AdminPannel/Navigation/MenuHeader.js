import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MenuHeader = ({ tabsName }) => {
  const location = useLocation();

  const [selectedTab, setSelectedTab] = useState(location.pathname);

  const handleTabClick = (path) => {
    setSelectedTab(path);
  };
  return (
    <div className="d-flex flex-column flex-md-row my-2 py-2 gap-3 ">
      {tabsName.map((ele) => (
        <div
          key={ele.id}
          className={`d-flex align-items-center px-3 border py-2 tab-item ${
            selectedTab === ele.path ? "selected " : ""
          }`}
          style={{
            borderRadius: "5px",
            fontWeight: selectedTab === ele.path ? "bold" : "",
            backgroundColor: selectedTab === ele.path ? "#a4c5d1" : "white",
            transition: "background-color 0.3s, color 0.3s",
            cursor: "pointer",
            color: selectedTab === ele.path ? "#004a66 " : "black",
          }}
          onClick={() => handleTabClick(ele.path)}
        >
          <Link to={ele.path} className="tab-link">
            {ele.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MenuHeader;