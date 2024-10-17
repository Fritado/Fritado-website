import React,{useState} from "react";
import Footer from "../components/commonComp/Footer";
import Header from "../components/commonComp/Header";
import BlogFilter from "../AdminPannel/Blog/BlogFilter";
import GuideList from "../components/GuideComponents/GuideList";

const Guides = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("AllCategories");
  return (
    <>
      <Header />
      <BlogFilter
        title="Guide List"
        setSearchQuery={setSearchQuery}
        setSelectedCategory={setSelectedCategory}
      />
      <GuideList
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
      />
      <Footer />
    </>
  );
};

export default Guides;
