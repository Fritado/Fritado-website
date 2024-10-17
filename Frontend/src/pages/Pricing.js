import React from 'react';
import Header from '../components/commonComp/Header';
import Pricings from '../components/PricingComp/Pricings';
import Footer from "../components/commonComp/Footer";
import Breadcrumb from '../components/commonComp/Breadcrumb';
const Pricing = () => {
  return (
    <div>
        <Header />
        <div className="d-flex flex-column justify-content-center align-items-center">
        <Breadcrumb
          title={"Expand as You Grow"}
          para={
            "Whether You're a Small Business, Medium Enterprise, or Large Corporation, We Offer Solutions to Automate Business Branding and Traffic Generation with Our Advanced Automation Tools"
          }
        />
      </div>
        <Pricings />
        <Footer />
    </div>
  )
}

export default Pricing
