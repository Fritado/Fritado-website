import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Solutions from "./pages/Solutions";
import ResearchDeveopment from "./pages/ResearchDeveopment";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import Demo from "./pages/Demo";

import ContactUs from "./pages/ContactUs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pricing from "./pages/Pricing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndCondition from "./pages/TermsAndCondition";
import Audits from "./pages/Audits";
import AdminLogin from "./AdminPannel/AdminLogin";
import AdminRoutes from "./AdminPannel/Navigation/AdminRoutes";
import Guides from "./pages/Guides";
import GuideDetail from "./pages/GuideDetail";

function App() {
  const [sidebarShow, setSidebarShow] = useState(true);
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/about" element={<About />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/guide" element={<Guides />} />
        <Route exact path="/demo" element={<Demo />} />
        <Route
          exact
          path="/Research-and-development"
          element={<ResearchDeveopment />}
        />
        <Route
          exact
          path="/terms-and-condition"
          element={<TermsAndCondition />}
        />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route exact path="/blog-details/:id" element={<BlogDetails />} />
        <Route exact path="/guide-details/:id" element={<GuideDetail />} />

        {/*<Route exact path="/benefits" element={<Benefits />} />*/}
        <Route exact path="/support" element={<ContactUs />} />
        <Route exact path="/solutions" element={<Solutions />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/website-performance-audit" element={<Audits />} />

        {/* Admin login */}
        <Route exact path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/*"
          element={
            <AdminRoutes
              sidebarShow={sidebarShow}
              setSidebarShow={setSidebarShow}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
