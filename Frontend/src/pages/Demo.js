import React from "react";
import Footer from "../components/commonComp/Footer";
import Breadcrumb from "../components/commonComp/Breadcrumb";
import Header from "../components/commonComp/Header";
import DemoForm from "../components/DemoComp/DemoForm";

const Demo = () => {
  return (
    <div>
      <Header />

      <Breadcrumb
        title={"One automation platform, boundless opportunities."}
        para={
          "Revolutionizing SEO through Artificial Intelligence is Our Mission."
        }
      />

      <section className="mx-auto flex flex-col justify-center items-center mt-7 mb-20 w-full lg:p-10 head-div">
        <div className="lg:w-[57%] mx-4">
          <div className="text-richblack-300 flex flex-col ">
            <h2 className="heading text-3xl font-semibold text-center">
              Fill out the form below, and we'll get back to you shortly.
            </h2>
            <div className="mt-7">
              <DemoForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Demo;
