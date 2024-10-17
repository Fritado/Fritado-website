import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = ({ sidebarShow }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("adminToken"); // Clear the token
    navigate("/admin/login");
  };
  return (
    <div className={`sidebar-container ${sidebarShow ? 'open' : 'closed'}`}>
      <NavLink className="nav-item border-bottom">
      <img src="/assets/img/logo-white.png" alt="img" className="mx-auto" style={{width:"140px"}}/>
      </NavLink>
      <NavLink
        to=""
        className="nav-item"
        activeClassName="active"
      >
        <span className="icon-wrapper"></span>
       Dashboard
      </NavLink>
      <NavLink
        to="/admin/dashboard/blogSetting"
        className="nav-item"
        activeClassName="active"
      >
        <span className="icon-wrapper"></span>
       Content management
      </NavLink>
      <NavLink to="/profile" className="nav-item" activeClassName="active">
        <span className="icon-wrapper"></span>
        About
      </NavLink>

      <div
        className="nav-item cursor-pointer"
       
        onClick={handleLogout}
      >
        <span className="icon-wrapper"></span>
        Logout
      </div>
    </div>
  );
};

export default Sidebar;
