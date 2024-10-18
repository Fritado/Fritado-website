import React from "react";
import Footer from "../components/commonComp/Footer";
import Breadcrumb from "../components/commonComp/Breadcrumb";
import Header from "../components/commonComp/Header";
import DemoPage from "../components/DemoComp/DemoPage";
import WebsiteAuditBanner from "../components/PageSpeedAudits/WebsiteAuditBanner";

const Demo = () => {
  return (
    <div>
      <Header />

      <Breadcrumb
        title={"Request a Free Demo of Our SEO Automation Platform"}
        para={
          "Revolutionizing SEO through Artificial Intelligence is Our Mission."
        }
      />
      <DemoPage />
      <WebsiteAuditBanner />

      <Footer />
    </div>
  );
};

export default Demo;
