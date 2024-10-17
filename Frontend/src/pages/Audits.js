import React from "react";
import AuditPage from "../components/PageSpeedAudits/AuditPage";
import Footer from "../components/commonComp/Footer";
import Header from "../components/commonComp/Header";
import Breadcrumb from "../components/commonComp/Breadcrumb";
import WebsiteAuditBanner from "../components/PageSpeedAudits/WebsiteAuditBanner";


const Audits = () => {
  return (
    <>
      <Header />
      <Breadcrumb
        title={"Website Performance Testing and Monitoring"}
        para={
          "Fritado tells you how your website performs, why it's slow, and how to optimize it."
        }
      />
      <AuditPage />
      <WebsiteAuditBanner />
      <Footer />
    </>
  );
};

export default Audits;
