// AdminHeader.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const AdminHeader = ({ sidebarShow, setSidebarShow }) => {
  return (
    <header className="custom-header">
      <div className="header-container">
        <button
          className="header-toggler"
          onClick={() => setSidebarShow((prevState) => !prevState)}
        >
          <IoMenu size={30} />
        </button>

        <div className="header-right">
          {/* Additional items like notifications or user profile can go here */}
          <Link to="/profile" className="header-item">
            <FaUser size={28}/>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;