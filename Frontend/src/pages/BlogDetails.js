import React from "react";
import BlogDetailsArea from "../components/BlogComponents/BlogDetailsArea";
import Footer from "../components/commonComp/Footer";
import Header from "../components/commonComp/Header";


const BlogDetails = () => {
  return (
    <>
      <Header />

      {/* Blog Details Area */}
      <BlogDetailsArea />

      {/* Footer One */}
      <Footer />
    </>
  );
};

export default BlogDetails;
