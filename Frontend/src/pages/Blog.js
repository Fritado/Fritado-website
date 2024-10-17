import React, { useState } from "react";
import Footer from "../components/commonComp/Footer";
import Header from "../components/commonComp/Header";
import RecentBlog from "../components/BlogComponents/RecentBlog";
import BlogFilter from "../AdminPannel/Blog/BlogFilter";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("AllCategories");
  return (
    <>
      <Header />

      <BlogFilter
      title="Recent Blog"
        setSearchQuery={setSearchQuery}
        setSelectedCategory={setSelectedCategory}
      />

      <RecentBlog
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
      />

      <Footer />
    </>
  );
};

export default Blog;
