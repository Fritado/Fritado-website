import React from "react";
import MenuHeader from "../Navigation/MenuHeader";

const BlogMenu = () => {
  const BlogtabsName = [
    { id: "1", title: "Blog", path: "/admin/dashboard/blogSetting" },
    { id: "2", title: "Guide", path: "/admin/dashboard/guideSetting" },
    { id: "3", title: "Setting", path: "/blog-category" },
  ];
  return (
    <div>
      <MenuHeader tabsName={BlogtabsName} />
    </div>
  );
};

export default BlogMenu;
