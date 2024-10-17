import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";

const Layout = ({ sidebarShow, setSidebarShow }) => {
  return (
    <div className="layout">
      <Sidebar sidebarShow={sidebarShow} />
      <div className="main-content">
        <AdminHeader
          sidebarShow={sidebarShow}
          setSidebarShow={setSidebarShow}
        />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
